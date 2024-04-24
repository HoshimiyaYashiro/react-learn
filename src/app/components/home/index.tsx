'use client';

import { useAppSelector } from "@/app/lib/hooks";
import { useRouter } from "next/navigation";
export default function HomeIndex() {
  const user = useAppSelector((state) => state.auth?.authUser)
  const router = useRouter()
  if (user) router.push('/dashboard')
  return null
};