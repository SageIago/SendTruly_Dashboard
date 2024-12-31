import { httpClient } from "@/lib/client";

interface ApiResponse {
  amountSpent: string;
  totalContactCount: number;
  totalSmsCount: number;
  chartData: { current_date: []; total_messages: [] };
}

export async function GetUserChartData(): Promise<{
  data: ApiResponse | null;
  error?: string;
  status?: number;
}> {
  try {
    const request = await httpClient.get("dashboard");
    const data: ApiResponse = await request.json();

    if (request.status === 200) {
      return { data, error: undefined, status: 200 };
    } else {
      return { data: null, error: "An error occurred"};
    }
  } catch (error) {
    console.log(error);
    return { data: null, error: "An error occurred", status: 500 };
  }
}
