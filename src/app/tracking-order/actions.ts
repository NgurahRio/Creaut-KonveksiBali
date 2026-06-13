"use server";

export async function trackOrderAPI(orderId: string) {
  try {
    const token = process.env.TRACKING_API_TOKEN;

    if (!token) {
      throw new Error("Token API tidak dikonfigurasi di server.");
    }

    const response = await fetch(`https://simadvishkonveksi.com/api/v1/orders/detail?number=${orderId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      // Jangan di-cache agar data tracking yang didapat selalu paling baru
      cache: "no-store",
    });

    const data = await response.json();

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