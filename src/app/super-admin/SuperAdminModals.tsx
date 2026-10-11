'use client';

import { useState } from 'react';
import Modal from '@/components/ui/Modal';
import CreateAdminForm from './CreateAdminForm';
import { setAdminRoleByEmail } from '@/app/actions/admins';

export default function SuperAdminModals() {
  const [openCreate, setOpenCreate] = useState(false);
  const [openPromote, setOpenPromote] = useState(false);

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => setOpenCreate(true)}
        className="px-4 py-2 rounded-lg bg-blue-500/15 text-blue-400 border border-blue-500/25 hover:bg-blue-500/25"
      >
        إنشاء أدمن جديد
      </button>
      <button
        type="button"
        onClick={() => setOpenPromote(true)}
        className="px-4 py-2 rounded-lg bg-emerald-500/15 text-emerald-400 border border-emerald-500/25 hover:bg-emerald-500/25"
      >
        ترقية حساب موجود
      </button>

      <Modal isOpen={openCreate} onClose={() => setOpenCreate(false)} title="إنشاء أدمن جديد">
        <CreateAdminForm />
      </Modal>

      <Modal isOpen={openPromote} onClose={() => setOpenPromote(false)} title="ترقية حساب إلى أدمن">
        <p className="text-sm text-muted-foreground mb-3">
          أدخل البريد الإلكتروني للحساب المراد ترقيته إلى أدمن.
        </p>
        <form action={setAdminRoleByEmail} className="space-y-3">
          <input
            name="email"
            type="email"
            required
            placeholder="example@domain.com"
            className="w-full bg-secondary/50 border border-border rounded-lg py-2.5 px-3 outline-none"
          />
          <button className="px-4 py-2 rounded-lg bg-emerald-500/15 text-emerald-400 border border-emerald-500/25 hover:bg-emerald-500/25">
            ترقية
          </button>
        </form>
      </Modal>
    </div>
  );
}
