"use server";

export async function trackOrderAPI(orderId: string) {
  try {
    const token = process.env.TRACKING_API_TOKEN;

    if (!token) {
      throw new Error("Token API tidak dikonfigurasi di server.");
    }

    const response = await fetch(`https://simadvishkonveksi.com/api/v1/orders/detail?number=${encodeURIComponent(orderId)}`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
      },
      // Jangan di-cache agar data tracking yang didapat selalu paling baru
      cache: "no-store",
    });

    // Ambil respons sebagai text dulu untuk mencegah crash jika isinya HTML
    const text = await response.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      console.error(`API tidak mengembalikan JSON (Status: ${response.status}). Respons asli:`, text.substring(0, 500));
      throw new Error(`Akses ditolak oleh server (Status: ${response.status}). Pastikan API token valid.`);
    }

    if (!response.ok || data.status === "error") {
      if (response.status === 404 || data.code === 404) {
        return { success: false, message: "Pesanan tidak ditemukan. Periksa kembali nomor pesanan Anda." };
      }
      throw new Error(data.message || `Gagal mengambil data dari API (Status: ${response.status})`);
    }

    return { success: true, data: data.data };
  } catch (error) {
    console.error("Error tracking order:", error);
    return { 
      success: false, 
      message: error instanceof Error ? error.message : "Terjadi kesalahan saat melacak pesanan." 
    };
  }
}