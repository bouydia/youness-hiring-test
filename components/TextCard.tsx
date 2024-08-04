type TextCardProps = {
  uuid?:number
  text: string
}

const TextCard = ({ text,uuid }: TextCardProps) => {
  return (
      <div className="mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
        <div className="p-6">
          <h5 className=" mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {uuid}
          </h5>
          <p className=" font-sans text-base antialiased font-light leading-relaxed text-inherit">
            {text}
          </p>
        </div>
      </div>
  )
}

export default TextCard
