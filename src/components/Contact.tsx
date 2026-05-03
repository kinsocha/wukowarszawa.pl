import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, FileText } from 'lucide-react';
import { siteConfig } from '../config/site';

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Hydrodynamiczne Wuko',
    'Sprężyna elektryczna',
    'Inspekcja kamerą TV',
    'Mieszkanie / dom jednorodzinny',
    'Wspólnota mieszkaniowa / blok',
    'Lokal usługowy / firma',
    'Inne / nie wiem',
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Imię i nazwisko jest wymagane';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Numer telefonu jest wymagany';
    } else if (!/^[0-9\s+()-]{9,}$/.test(formData.phone)) {
      newErrors.phone = 'Podaj prawidłowy numer telefonu';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Podaj prawidłowy adres e-mail';
    }

    if (!formData.service) {
      newErrors.service = 'Wybierz rodzaj usługi';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Opisz swój problem';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Symulacja wysłania - w produkcji podłączyć do backendu (np. formspree, getform, mailto)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      content: siteConfig.phone,
      link: `tel:${siteConfig.phoneTel}`,
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: siteConfig.email,
      link: `mailto:${siteConfig.email}`,
    },
    {
      icon: MapPin,
      title: 'Siedziba',
      content: `${siteConfig.address.street}, ${siteConfig.address.postalCode} ${siteConfig.address.city} (${siteConfig.address.region})`,
      link: null,
    },
    {
      icon: Clock,
      title: 'Termin realizacji',
      content: 'Zawsze ustalamy przed przyjazdem',
      link: null,
    },
  ];

  return (
    <section id="kontakt" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-sky-600 font-semibold text-sm tracking-wider uppercase mb-4">
            Kontakt
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Zadzwoń lub napisz
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Najszybciej zadzwonić – ustalimy termin i podamy orientacyjny koszt.
            Możesz też zostawić wiadomość przez formularz.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Form */}
          <div className="bg-white rounded-2xl p-6 lg:p-10 shadow-sm">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Dziękujemy za wiadomość!
                </h3>
                <p className="text-slate-600 mb-6">
                  Skontaktujemy się z Tobą najszybciej, jak to możliwe.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
                  }}
                  className="text-sky-600 font-semibold hover:text-sky-700 transition-colors"
                >
                  Wyślij kolejną wiadomość
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Imię i nazwisko *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                      errors.name ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-sky-500'
                    }`}
                    placeholder="Jan Kowalski"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                      errors.phone ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-sky-500'
                    }`}
                    placeholder=""
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    E-mail (opcjonalnie)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                      errors.email ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-sky-500'
                    }`}
                    placeholder="jan@example.pl"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
                    Rodzaj sprawy *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white ${
                      errors.service ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-sky-500'
                    }`}
                  >
                    <option value="">Wybierz...</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.service}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Krótki opis problemu *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-xl border transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none ${
                      errors.message ? 'border-red-300 focus:border-red-500' : 'border-slate-200 focus:border-sky-500'
                    }`}
                    placeholder="Np. zatkany zlew kuchenny, mieszkanie w bloku, Praga Południe..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-sky-500 to-cyan-500 text-white py-3.5 rounded-full font-semibold hover:shadow-lg hover:shadow-sky-500/30 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Wysyłanie...'
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Wyślij wiadomość</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-sky-500 to-cyan-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-3">Najszybciej – telefon</h3>
              <p className="mb-6 text-white/90">
                Krótki opis problemu, dzielnica i typ budynku – w 2 minuty wiemy, co przygotować.
              </p>
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="inline-flex items-center gap-3 bg-white text-sky-600 px-6 py-3 rounded-full font-bold hover:shadow-xl transition-all hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                <span>{siteConfig.phone}</span>
              </a>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-2xl p-5 shadow-sm">
                  <div className="p-2 bg-sky-50 rounded-lg w-fit mb-3">
                    <info.icon className="w-5 h-5 text-sky-600" />
                  </div>
                  <div className="font-semibold text-slate-900 mb-1">{info.title}</div>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-slate-600 hover:text-sky-600 transition-colors text-sm"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <div className="text-slate-600 text-sm">{info.content}</div>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <FileText className="w-6 h-6 text-sky-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Dane firmy</h4>
                  <div className="text-sm text-slate-600 space-y-1">
                    <p>{siteConfig.legalName}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
