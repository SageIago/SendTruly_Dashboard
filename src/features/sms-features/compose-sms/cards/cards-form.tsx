import { GetAllListsMutation } from "@/api/contact/get-all-lists";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { BotIcon } from "lucide-react";
import { BarLoader } from "react-spinners";

const CardsForm = () => {
  const { data: list_data, isPending } = GetAllListsMutation();
  return (
    <div className="w-full max-w-[250px] flex gap-5 flex-col mr-5">
      <Card className="w-full flex flex-col py-10 !bg-white text-primary-900 font-Manrope rounded-[10px] shadow-lg">
        <CardContent className="flex flex-col gap-3">
          {isPending ? (
            <>
              <BarLoader className="w-full mx-auto" />
            </>
          ) : (
            <>
              {(list_data?.data.length ?? 0 > 0) ? (
                <>
                  <div className="flex flex-col !gap-2 items-start">
                    <div>
                      <h2 className="text-[14px leading-[20px] mb-2">
                        Select From Your List...
                      </h2>
                      <div className="border-t-primary-900 !border-[0.5px] w-full mx-auto" />
                    </div>

                    {/*FLEX-ROW  */}
                    <div className="flex flex-col !gap-2">
                      {list_data?.data.map((data, index) => (
                        <div className="flex flex-row gap-2">
                          <Checkbox
                            onClick={() => {}}
                            className="text-primary-900"
                          />
                          <div
                            className="flex flex-row justify-between text-primary-900"
                            key={
                              `${data.list_name}-${data.date_created}-${data.list_token}` +
                              index
                            }
                          >
                            {data.list_name}

                            <Badge className="text-primary-100 bg-purple-500 px-2 text-center hover:bg-purple-500 cursor-pointer rounded-none">
                              {data.total_numbers}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex gap-2 items-center flex-col">
                    <BotIcon width={40} height={40} />
                    <p className="text-[14px] leading-[20px] text-wrap text-center">
                      There Are No Contacts Added Yet!
                    </p>
                  </div>

                  <Button
                    className="p-5 bg-purple-500 hover:bg-inherit text-primary-100 rounded-[6px]"
                    onClick={() => {}}
                  >
                    Add Contacts
                  </Button>
                </>
              )}
            </>
          )}
        </CardContent>
      </Card>

      <Card className="w-full flex flex-col py-10 px-2 rounded-[10px] !bg-white text-primary-900 shadow-lg font-Manrope">
        <CardContent className="flex flex-col gap-2 overflow-auto max-h-60">
          <h2 className="text-secondary-100 font-bold text-[15px] underline">
            NCC Blocked Keywords
          </h2>
          <p className="break-words whitespace-pre-wrap">
            Globacom, win, yellow, congrats, congratulations, promotion.
            congrat, congratulation, wow, sex, promo, fuck, yello, raffle
            promotions, winning, won, wadaYellow, survey, surveyor, hurray,
            financial code, whatsapp, facebook, twitter, instagram, yahoo.com,
            APC, PDP, vote, YDP, election etc
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardsForm;
