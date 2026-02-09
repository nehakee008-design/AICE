import React from 'react'

interface HeroProps {
  title: string
  subtitle: string
  description?: string
  cta?: {
    text: string
    link: string
  }
  secondaryCta?: {
    text: string
    link: string
  }
  backgroundImage?: string
}

export default function Hero({
  title,
  subtitle,
  description,
  cta,
  secondaryCta,
  backgroundImage,
}: HeroProps) {
  return (
    <section
      className="relative py-20 md:py-32 overflow-hidden"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80"></div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <p className="text-primary-light/80 font-semibold mb-4 inline-block bg-white/10 px-4 py-2 rounded-full">
            {subtitle}
          </p>
          <h1 className="heading-lg text-white mb-6 leading-tight">
            {title}
          </h1>
          {description && (
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {description}
            </p>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {cta && (
              <a
                href={cta.link}
                className="btn-primary bg-white text-primary hover:bg-gray-100"
              >
                {cta.text}
              </a>
            )}
            {secondaryCta && (
              <a
                href={secondaryCta.link}
                className="btn-secondary border-white text-white hover:bg-white hover:text-primary"
              >
                {secondaryCta.text}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
    </section>
  )
}
