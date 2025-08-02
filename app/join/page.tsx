import type { Metadata } from "next";
import JoinForm from "./JoinForm";

export const metadata: Metadata = {
  title: "Join Now | SRIYOG App",
  description: "Learn about SRIYOG, its mission, and impact.",
};

export default function Page() {
  return <JoinForm />;
}
