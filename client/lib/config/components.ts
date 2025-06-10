import { ComponentConfigs } from '../types/components';

export const componentConfigs: ComponentConfigs = {
  // Layout Components
  container: {
    defaultStyle: {
      backgroundColor: '#ffffff',
      padding: '16px',
      borderRadius: 8,
    },
    defaultContent: {},
    defaultLayout: {
      width: 300,
      height: 200,
    },
  },
  grid: {
    defaultStyle: {
      backgroundColor: '#ffffff',
      padding: '16px',
      borderRadius: 8,
    },
    defaultContent: {},
    defaultLayout: {
      width: 300,
      height: 200,
    },
  },
  stack: {
    defaultStyle: {
      backgroundColor: '#ffffff',
      padding: '16px',
      borderRadius: 8,
    },
    defaultContent: {},
    defaultLayout: {
      width: 300,
      height: 200,
    },
  },
  section: {
    defaultStyle: {
      backgroundColor: '#ffffff',
      padding: '24px',
      borderRadius: 8,
    },
    defaultContent: {},
    defaultLayout: {
      width: 400,
      height: 300,
    },
  },
  divider: {
    defaultStyle: {
      backgroundColor: '#e5e7eb',
      height: '1px',
    },
    defaultContent: {},
    defaultLayout: {
      width: 300,
      height: 1,
    },
  },

  // Content Components
  text: {
    defaultStyle: {
      color: '#000000',
      fontSize: 16,
    },
    defaultContent: {
      text: 'New Text',
    },
    defaultLayout: {
      width: 150,
      height: 24,
    },
  },
  heading: {
    defaultStyle: {
      color: '#000000',
      fontSize: 24,
      fontWeight: '600',
    },
    defaultContent: {
      text: 'Heading',
    },
    defaultLayout: {
      width: 200,
      height: 32,
    },
  },
  paragraph: {
    defaultStyle: {
      color: '#000000',
      fontSize: 14,
    },
    defaultContent: {
      text: 'Paragraph text',
    },
    defaultLayout: {
      width: 300,
      height: 80,
    },
  },
  list: {
    defaultStyle: {
      color: '#000000',
      fontSize: 14,
    },
    defaultContent: {},
    defaultLayout: {
      width: 200,
      height: 100,
    },
  },
  quote: {
    defaultStyle: {
      color: '#4b5563',
      fontSize: 16,
      fontStyle: 'italic',
      borderLeft: '4px solid #e5e7eb',
      padding: '0 16px',
    },
    defaultContent: {
      text: 'Quote text',
    },
    defaultLayout: {
      width: 300,
      height: 80,
    },
  },

  // Media Components
  image: {
    defaultStyle: {
      borderRadius: 8,
    },
    defaultContent: {
      src: 'https://via.placeholder.com/150',
      alt: 'Image',
    },
    defaultLayout: {
      width: 150,
      height: 150,
    },
  },
  video: {
    defaultStyle: {
      borderRadius: 8,
    },
    defaultContent: {},
    defaultLayout: {
      width: 320,
      height: 240,
    },
  },
  icon: {
    defaultStyle: {
      color: '#000000',
    },
    defaultContent: {},
    defaultLayout: {
      width: 24,
      height: 24,
    },
  },
  avatar: {
    defaultStyle: {
      borderRadius: '50%',
    },
    defaultContent: {
      src: 'https://via.placeholder.com/40',
      alt: 'Avatar',
    },
    defaultLayout: {
      width: 40,
      height: 40,
    },
  },

  // Input Components
  button: {
    defaultStyle: {
      backgroundColor: '#2563eb',
      color: '#ffffff',
      padding: '12px 24px',
      borderRadius: 8,
      fontWeight: '600',
    },
    defaultContent: {
      text: 'Button',
    },
    defaultLayout: {
      width: 150,
      height: 48,
    },
  },
  input: {
    defaultStyle: {
      backgroundColor: '#ffffff',
      border: '1px solid #e5e7eb',
      borderRadius: 6,
      padding: '8px 12px',
    },
    defaultContent: {
      placeholder: 'Enter text...',
    },
    defaultLayout: {
      width: 200,
      height: 40,
    },
  },
  textarea: {
    defaultStyle: {
      backgroundColor: '#ffffff',
      border: '1px solid #e5e7eb',
      borderRadius: 6,
      padding: '8px 12px',
    },
    defaultContent: {
      placeholder: 'Enter text...',
    },
    defaultLayout: {
      width: 300,
      height: 100,
    },
  },
  checkbox: {
    defaultStyle: {
      width: '16px',
      height: '16px',
    },
    defaultContent: {},
    defaultLayout: {
      width: 16,
      height: 16,
    },
  },
  radio: {
    defaultStyle: {
      width: '16px',
      height: '16px',
    },
    defaultContent: {},
    defaultLayout: {
      width: 16,
      height: 16,
    },
  },
  select: {
    defaultStyle: {
      backgroundColor: '#ffffff',
      border: '1px solid #e5e7eb',
      borderRadius: 6,
      padding: '8px 12px',
    },
    defaultContent: {},
    defaultLayout: {
      width: 200,
      height: 40,
    },
  },
  toggle: {
    defaultStyle: {
      width: '40px',
      height: '24px',
    },
    defaultContent: {},
    defaultLayout: {
      width: 40,
      height: 24,
    },
  },
  slider: {
    defaultStyle: {
      width: '200px',
    },
    defaultContent: {},
    defaultLayout: {
      width: 200,
      height: 24,
    },
  },

  // Navigation Components
  link: {
    defaultStyle: {
      color: '#2563eb',
      textDecoration: 'underline',
    },
    defaultContent: {
      text: 'Link',
    },
    defaultLayout: {
      width: 100,
      height: 24,
    },
  },
  menu: {
    defaultStyle: {
      backgroundColor: '#ffffff',
      border: '1px solid #e5e7eb',
      borderRadius: 6,
    },
    defaultContent: {},
    defaultLayout: {
      width: 200,
      height: 40,
    },
  },
  tabs: {
    defaultStyle: {
      backgroundColor: '#ffffff',
      border: '1px solid #e5e7eb',
      borderRadius: 6,
    },
    defaultContent: {},
    defaultLayout: {
      width: 300,
      height: 40,
    },
  },
  breadcrumbs: {
    defaultStyle: {
      color: '#6b7280',
    },
    defaultContent: {},
    defaultLayout: {
      width: 300,
      height: 24,
    },
  },

  // Feedback Components
  alert: {
    defaultStyle: {
      backgroundColor: '#fee2e2',
      color: '#991b1b',
      padding: '12px 16px',
      borderRadius: 6,
    },
    defaultContent: {
      text: 'Alert message',
    },
    defaultLayout: {
      width: 300,
      height: 60,
    },
  },
  toast: {
    defaultStyle: {
      backgroundColor: '#1f2937',
      color: '#ffffff',
      padding: '12px 16px',
      borderRadius: 6,
    },
    defaultContent: {
      text: 'Toast message',
    },
    defaultLayout: {
      width: 300,
      height: 48,
    },
  },
  progress: {
    defaultStyle: {
      backgroundColor: '#e5e7eb',
      borderRadius: 9999,
    },
    defaultContent: {},
    defaultLayout: {
      width: 200,
      height: 8,
    },
  },
  spinner: {
    defaultStyle: {
      color: '#2563eb',
    },
    defaultContent: {},
    defaultLayout: {
      width: 24,
      height: 24,
    },
  },
}; 