declare module '@fortawesome/react-fontawesome' {
  import { ComponentType, SVGProps } from 'react';
  import { IconDefinition, IconPrefix } from '@fortawesome/fontawesome-common-types';

  export interface FontAwesomeIconProps extends SVGProps<SVGSVGElement> {
    icon: IconDefinition | [IconPrefix, string];
    spin?: boolean;
    pulse?: boolean;
    fixedWidth?: boolean;
    className?: string;
  }

  const FontAwesomeIcon: ComponentType<FontAwesomeIconProps>;
  export default FontAwesomeIcon;
}

declare module '@fortawesome/free-solid-svg-icons' {
  import { IconDefinition, IconName } from '@fortawesome/fontawesome-common-types';
  export const faSpinner: IconDefinition;
  // Add other icons as needed
}
