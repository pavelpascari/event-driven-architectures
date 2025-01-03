import Link from 'next/link'
import Image, { ImageProps } from 'next/image'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'
import React from 'react'
import { cn } from '@/lib/utils'
import remarkGfm from 'remark-gfm'

// function Table({ data }: { data: { headers: string[]; rows: string[][] } }) {
//   const headers = data.headers.map((header, index) => (
//     <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right" key={index}>{header}</th>
//   ))
//   const rows = data.rows.map((row, index) => (
//     <tr className="m-0 border-t p-0 even:bg-muted" key={index}>
//       {row.map((cell, cellIndex) => (
//         <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right" key={cellIndex}>{cell}</td>
//       ))}
//     </tr>
//   ))

//     return (
//       <div className="my-6 w-full overflow-y-auto">
//     <table className="w-full">
//       <thead>
//         <tr>{headers}</tr>
//       </thead>
//       <tbody>{rows}</tbody>
//     </table>
//   </div>
//             )
// }


const CustomLink = (props: {href: string, children: React.ReactNode}) =>{
    const { href, ...remainingProps } = props

    if (href.startsWith('/')) {
      
    return (
      <Link href={href} {...remainingProps}>
        {props.children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a {...props} />
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

const RoundedImage = (props: ImageProps) => {
    const {alt, ...remainingProps} = props  
  return <Image alt={alt} className="rounded-lg" {...remainingProps} />
}

const Paragraph = (props: React.HTMLProps<HTMLParagraphElement>) => {
    return <p className="leading-7 [&:not(:first-child)]:mt-6" {...props} />
    }

const Code=({ children, ...props }: {children: string} & React.HTMLProps<HTMLElement>) =>{
  const codeHTML = highlight(children)
  return <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold" dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}


interface CalloutProps {
  icon?: string
  children?: React.ReactNode
  type?: "default" | "warning" | "danger"
}

function Callout({
  children,
  icon,
  type = "default",
  ...props
}: CalloutProps) {
  return (
    <div
      className={cn("my-6 flex items-start rounded-md border border-l-4 p-4", {
        "border-red-900 bg-red-50": type === "danger",
        "border-yellow-900 bg-yellow-50": type === "warning",
      })}
      {...props}
    >
      {icon && <span className="mr-4 text-2xl">{icon}</span>}
      <div>{children}</div>
    </div>
  )
}

function slugify(value: string) {
  return value
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

function createHeading(level: number, className?: string) {
  const Heading = ({ children }: {children: React.ReactNode}) => {
    const slug = slugify(children?.toString() || '')
    return React.createElement(
      `h${level}`,
      { id: slug, className: className||'' },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children
    )
  }

  Heading.displayName = `Heading${level}`

  return Heading
}

const components = {
  h1: createHeading(1, "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"),
  h2: createHeading(2, "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"),
  h3: createHeading(3, "scroll-m-20 text-2xl font-semibold tracking-tight"),
  h4: createHeading(4, "scroll-m-20 text-xl font-semibold tracking-tight"),
  h5: createHeading(5, "scroll-m-20 text-l font-semibold tracking-tight"),
  h6: createHeading(6, "scroll-m-20 text-m font-semibold tracking-tight"),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
    // Table,
    p: Paragraph,
    Callout,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn("even:bg-muted m-0 border-t p-0", className)}
      {...props}
    />
  ),
  th: ({
    className,
    ...props
  }: React.HtmlHTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
}

export function CustomMDX(props: React.JSX.IntrinsicAttributes & MDXRemoteProps) {
  return (
    <MDXRemote
          {...props}
          options={{
          mdxOptions: {
              remarkPlugins: [remarkGfm]
          }
      }}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}