import { ReactNode } from "react"

type schedulesProps = {
  icon: ReactNode,
  text: string
}

const SchedulesDetails = ({icon, text} : schedulesProps) => {
  return (
    <div className="flex items-center gap-3 bg-white p-3 rounded-md">
      <div className="size-6">
      {icon}
      </div>
      <span>{text}</span>
    </div>
  )
}

export default SchedulesDetails