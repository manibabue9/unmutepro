import type { Metadata } from "next";
import AuthForm from "./AuthForm";
export const metadata: Metadata = { title: "Learner sign in", robots: { index: false, follow: false } };
export default function LoginPage() { return <AuthForm />; }
