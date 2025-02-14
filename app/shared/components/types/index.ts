export type GlobalProps = {
  children?: React.ReactNode;
  bgColor?: string;
  textColor?: string;
};

export type ParagraphProps = GlobalProps & {
  size: "xsmall" | "small" | "medium" | "large";
};

export type HeadingProps = GlobalProps & {
  level: 1 | 2 | 3 | 4 | 5 | 6;
};

export type CaptionProps = GlobalProps & {
  size: "xsmall" | "small" | "medium" | "large";
};

export type HeaderProps = GlobalProps & {
  navLinks: {
    title: string;
    href: string;
  }[];
  socialLinks?: {
    title: string;
    href: string;
    icon: React.ReactNode;
  }[];
};

export type TopicsProps = GlobalProps & {
  topics: TopicProps[];
};

export type TopicProps = {
  title: string;
  subtitle?: string;
  description: string;
  beforeSlug?: string;
  slug?: string;
  icon?: string;
};

export type BreadcrumbProps = GlobalProps & {
  navLinks: MainBreadcrumbProps[];
};

export type MainBreadcrumbProps = {
  title: string;
  href: string;
  nested?: NestedBreadcrumbProps[];
};

export type NestedBreadcrumbProps = {
  title: string;
  href?: string;
  nested?: NestedBreadcrumbProps[];
};

export type PageInfoProps = GlobalProps & {
  title: string;
  description: string;
  subtitle?: string;
};

export type DialogProps = GlobalProps & {
  triggerLabel: string;
  title: string;
  description: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
};

export type ComboboxProps = GlobalProps & {
  label: string;
  options: {
    label: string;
    value: string
  }[];
  value: string;
  onChange: (value: string) => void;
};

export type SummaryProps = GlobalProps & {
  title: string;
  items: {
    title: string;
    description: string;
    slug?: string;
  }[];
};

export type ContentProps = GlobalProps & {
  title: string;
  description: string;
  content?: {
    example?: string;
    result?: string;
    resultDescription?: string;
    resultLabel?: string;
    resultOptions?: {
      label: string;
      value: string;
    }[];
    note?: string;
    slug?: string;
  }[];
};

export type InputProps = GlobalProps & {
  label: string;
  type: string;
  value?: string;
};