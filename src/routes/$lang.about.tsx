import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export const Route = createFileRoute('/$lang/about')({
  component: AboutPage,
})

function AboutPage() {
  const { t } = useTranslation()

  return (
    <div>
      <h1 className="text-3xl font-bold">{t('about.title')}</h1>
      <p className="mt-4">{t('about.description')}</p>
    </div>
  )
}