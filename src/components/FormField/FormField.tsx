import type { ChangeEvent } from 'react';
import { cn } from '../../utils/cn';
import styles from './FormField.module.css';

interface FormFieldProps {
  name: string;
  label: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  type?: 'text' | 'email';
  placeholder?: string;
  /** Renderiza um <textarea> em vez de <input>. */
  multiline?: boolean;
}

export default function FormField({
  name,
  label,
  value,
  onChange,
  error,
  type = 'text',
  placeholder,
  multiline = false,
}: FormFieldProps) {
  const id = `field-${name}`;
  const errorId = `${id}-error`;

  const commonProps = {
    id,
    name,
    value,
    onChange,
    placeholder,
    className: cn(styles.control, error && styles.invalid),
    'aria-invalid': Boolean(error),
    'aria-describedby': error ? errorId : undefined,
  };

  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>

      {multiline ? <textarea rows={6} {...commonProps} /> : <input type={type} {...commonProps} />}

      {error && (
        <span id={errorId} className={styles.error} role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
