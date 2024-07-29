import { respData, respErr } from "@/lib/resp";

export async function GET(req: Request) {
  try {
    return respData({ message: 'Hello' });
  } catch (e) {
    console.log("Hello failed", e);
    return respErr("Hello failed");
  }
}
