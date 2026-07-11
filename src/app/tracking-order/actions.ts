"use server";

export async function trackOrderAPI(orderId: string) {
  try {
    const token = process.env.TRACKING_API_TOKEN;

    if (!token) {
      throw new Error("Token API tidak dikonfigurasi di server.");
    }

    // Sanitize input: Hanya membolehkan huruf, angka, strip (-), dan garis miring (/)
    const sanitizedOrderId = orderId.replace(/[^a-zA-Z0-9\-\/]/g, "").trim();

    if (!sanitizedOrderId) {
      return { success: false, message: "Nomor invoice tidak valid." };
    }

    const response = await fetch(`https://simadvishkonveksi.com/api/v1/orders/detail?number=${encodeURIComponent(sanitizedOrderId)}`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
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
      throw new Error(
        `Server tracking menolak permintaan (Status: ${response.status}).`
      );
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