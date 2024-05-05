// src/components/custom-component.tsx

interface CustomComponentProps {
    variant?: string; // Prop for variant selection
    // Other props for customization (e.g., size, color)
    children: React.ReactNode;
  }
  
  const CustomComponent: React.FC<CustomComponentProps> = ({ children, variant, ...otherProps }) => (
    <div className={variant} {...otherProps}>
      {children}
    </div>
  );
  
  export default CustomComponent;
  