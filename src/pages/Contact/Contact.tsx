import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { CircleCheck, MessageSquare, Send } from 'lucide-react';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import FormField from '../../components/FormField/FormField';
import IconBox from '../../components/IconBox/IconBox';
import PageHeader from '../../components/PageHeader/PageHeader';
import Section from '../../components/Section/Section';
import SocialLinks from '../../components/SocialLinks/SocialLinks';
import { author } from '../../data/autor';
import { usePageTitle } from '../../hooks/usePageTitle';
import styles from './Contact.module.css';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

type FormErrors = Partial<Record<keyof ContactForm, string>>;

const initialForm: ContactForm = { name: '', email: '', message: '' };

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Retorna um objeto com a mensagem de erro de cada campo inválido. */
function validate(form: ContactForm): FormErrors {
  const errors: FormErrors = {};

  if (form.name.trim().length < 3) {
    errors.name = 'Informe seu nome (mínimo de 3 caracteres).';
  }
  if (!EMAIL_REGEX.test(form.email.trim())) {
    errors.email = 'Informe um e-mail válido. Ex.: nome@email.com';
  }
  if (form.message.trim().length < 10) {
    errors.message = 'A mensagem deve ter pelo menos 10 caracteres.';
  }

  return errors;
}

export default function Contact() {
  usePageTitle('Contato');

  const [form, setForm] = useState<ContactForm>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [hasTriedSubmit, setHasTriedSubmit] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    const updatedForm = { ...form, [name]: value };
    setForm(updatedForm);

    // Depois da 1ª tentativa de envio, valida enquanto o usuário digita
    if (hasTriedSubmit) {
      setErrors(validate(updatedForm));
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHasTriedSubmit(true);

    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    // Não há back-end: apenas simulamos o envio com sucesso
    setSubmitted(true);
    setForm(initialForm);
    setHasTriedSubmit(false);
  };

  const handleNewMessage = () => setSubmitted(false);

  return (
    <>
      <PageHeader
        eyebrow="Contato"
        title="Fale com o autor"
        subtitle="Dúvidas, sugestões ou interesse em usar o SGEA na sua instituição? Envie uma mensagem."
      />

      <Section>
        <div className={styles.grid}>
          <Card
            icon={MessageSquare}
            title="Vamos conversar"
            description="Este formulário é uma demonstração do front-end do projeto: os dados são validados no navegador e nenhuma informação é enviada a um servidor."
            variant="highlight"
          >
            <p>Você também pode falar comigo pelo LinkedIn ou acompanhar o projeto no GitHub:</p>
            <SocialLinks links={author.links} variant="dark" showLabel />
          </Card>

          <div className={styles.formCard}>
            {submitted ? (
              <div className={styles.success} role="status">
                <IconBox icon={CircleCheck} tone="success" size="xl" round />
                <h2>Mensagem enviada!</h2>
                <p>Obrigado pelo contato. Sua mensagem foi registrada com sucesso.</p>
                <Button variant="secondary" onClick={handleNewMessage}>
                  Enviar nova mensagem
                </Button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <FormField
                  name="name"
                  label="Nome"
                  placeholder="Seu nome completo"
                  value={form.name}
                  onChange={handleChange}
                  error={errors.name}
                />
                <FormField
                  name="email"
                  type="email"
                  label="E-mail"
                  placeholder="nome@email.com"
                  value={form.email}
                  onChange={handleChange}
                  error={errors.email}
                />
                <FormField
                  name="message"
                  label="Mensagem"
                  placeholder="Escreva sua mensagem..."
                  value={form.message}
                  onChange={handleChange}
                  error={errors.message}
                  multiline
                />
                <Button type="submit" size="lg" icon={Send} fullWidth>
                  Enviar mensagem
                </Button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
