// app/service/[slug]/page.tsx
'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import HeaderComponent from '@/app/components/HeaderComponent'
import { Servicearray } from '@/app/array'

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>()
  console.log(decodeURIComponent(slug || ''))

  const service = Servicearray.find((item) => item.title.toLowerCase() === decodeURIComponent(slug.toLocaleLowerCase() || ''))
  const ServiceContent = service?.component
  if (!service) {
    return (
      <div className="p-20 text-center text-2xl font-bold">
        Service not found 😢
      </div>
    )
  }

  return (
    <div>
      <HeaderComponent title={service.title} image={service.img} />
     {ServiceContent && <ServiceContent />}
    </div>
  )
}
