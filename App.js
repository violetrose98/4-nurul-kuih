import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { useState } from "react";

export default function KuihWebsite() {
  const [form, setForm] = useState({
    nama: "",
    phone: "",
    pesanan: "",
    method: "COD",
    tarikh: "",
  });

  const handleSubmit = () => {
    const message = `Tempahan Baru 4 Nurul%0A%0ANama: ${form.nama}%0ANo Phone: ${form.phone}%0APesanan: ${form.pesanan}%0APilihan: ${form.method}%0ATarikh: ${form.tarikh}`;
    window.open(`https://wa.me/60123456789?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-amber-50 p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold tracking-wide text-amber-900">
          4 Nurul
        </h1>
        <p className="text-sm text-amber-700 mt-2">
          Homemade Tradisional • Premium Taste
        </p>
      </motion.div>

      {/* Product Section */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-4">
            <img
              src="https://images.unsplash.com/photo-1604908176997-4315b9b0c8d3"
              alt="Mazola"
              className="rounded-xl mb-4"
            />
            <h2 className="text-xl font-semibold">Kuih Mazola</h2>
            <p className="text-sm text-gray-600">
              Rangup di luar, lembut di dalam. Dibuat fresh setiap hari.
            </p>
            <p className="mt-2 font-bold text-amber-900">RM25 / balang</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-lg">
          <CardContent className="p-4">
            <img
              src="https://images.unsplash.com/photo-1599785209707-28a7c5c74f4b"
              alt="Kuih Loyang"
              className="rounded-xl mb-4"
            />
            <h2 className="text-xl font-semibold">Kuih Loyang</h2>
            <p className="text-sm text-gray-600">
              Tradisional klasik, rangup & wangi santan.
            </p>
            <p className="mt-2 font-bold text-amber-900">RM20 / bekas</p>
          </CardContent>
        </Card>
      </div>

      {/* Promo / Branding */}
      <div className="mt-10 text-center">
        <p className="text-amber-800 font-medium">
          Fresh homemade setiap hari • Limited batch 🍪
        </p>
        <p className="text-sm text-red-600 mt-1">
          ⚠️ Order ditutup bila slot penuh
        </p>
      </div>

      {/* Order Form */}
      <div className="mt-12 max-w-xl mx-auto">
        <Card className="rounded-2xl shadow-xl">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-xl font-semibold text-center text-amber-900">
              Borang Tempahan
            </h3>

            <div>
              <Label>Nama</Label>
              <Input
                placeholder="Masukkan nama"
                onChange={(e) => setForm({ ...form, nama: e.target.value })}
              />
            </div>

            <div>
              <Label>No. Telefon</Label>
              <Input
                placeholder="Contoh: 0123456789"
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>

            <div>
              <Label>Pesanan</Label>
              <Input
                placeholder="Contoh: Mazola 2, Loyang 1"
                onChange={(e) => setForm({ ...form, pesanan: e.target.value })}
              />
            </div>

            <div>
              <Label>Pilihan Ambil</Label>
              <select
                className="w-full border rounded-xl p-2"
                onChange={(e) => setForm({ ...form, method: e.target.value })}
              >
                <option>COD</option>
                <option>Pickup</option>
              </select>
            </div>

            <div>
              <Label>Tarikh Ambil</Label>
              <Input
                type="date"
                onChange={(e) => setForm({ ...form, tarikh: e.target.value })}
              />
            </div>

            <Button
              className="w-full bg-amber-900 hover:bg-amber-800"
              onClick={handleSubmit}
            >
              Hantar Tempahan
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <div className="mt-10 text-center text-sm text-amber-700">
        © 2026 4 Nurul • Homemade with Love
      </div>
    </div>
  );
}
