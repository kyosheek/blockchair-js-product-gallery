export type SectionHeading = 'h2' | 'h3' | 'h4' | 'h5';
export type AnchorHeading = 'h3' | 'h4' | 'h5' | 'h6';

export type InjectFN = (
    mountID: string,
    sectionTitleHeading: SectionHeading,
    anchorTitleHeading: AnchorHeading,
    fontFamilyTitle: CSSStyleDeclaration['fontFamily'],
    fontFamilyDescription: CSSStyleDeclaration['fontFamily'],
) => void;