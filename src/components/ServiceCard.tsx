import React from 'react'

interface ServiceCardProps {
  icon: string
  title: string
  description: string
  features?: string[]
}

export default function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  const getIcon = (iconName: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      computer: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20m0 0l-.75 3M9 20h6m-6 0h.01M15 17l.75 3m0 0l.75 3M15 17h-6m6 0h.01M12 13V9m0 0V5.25M12 9h-3m0 0H5.25M12 9h3m0 0h3.75M5.25 9v6M18.75 9v6" />
        </svg>
      ),
      wrench: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
      network: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      camera: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      cloud: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.875 14.25l5.409-5.409m0 0L16.5 3M7.875 14.25L3.375 18.75m5.5-5.5l5.409 5.409m0 0L21 9.75M12.75 12.75l4.5-4.5" />
        </svg>
      ),
      lightbulb: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5.36 4.64l-.707.707M9 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    }
    return icons[iconName] || icons.computer
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
      {/* Icon */}
      <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
        <div className="text-primary">{getIcon(icon)}</div>
      </div>

      {/* Title */}
      <h3 className="heading-md mb-4 text-gray-900">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

      {/* Features */}
      {features && features.length > 0 && (
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-sm text-gray-600">
              <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
