import Link from "next/link"

interface Props {
  content: string
  tailwind: string
  route: string
}

export function ButtonVariant({ content, tailwind, route }: Props) {
  return (
    <>
      <Link href={route}>
        <p className={`${tailwind}`}>{content}</p>

      </Link>
    </>
  )
}
