import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { BotIcon } from 'lucide-react'

const CardsForm = () => {
  return (
    <div className="w-full max-w-[250px] flex gap-5 flex-col mr-5">
    <Card className="w-full flex flex-col px-5 py-10 !bg-white text-primary-900 font-Manrope rounded-[10px] shadow-lg">
      <CardContent className="flex flex-col gap-5 items-center">
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
  )
}

export default CardsForm
