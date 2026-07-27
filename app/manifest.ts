import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Muhammad Sohaib Asif | Developer Portfolio',
    short_name: 'CodeBySohaib',
    description: 'Web & Native Android Developer Portfolio & Technical Blog by Muhammad Sohaib Asif.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0b0f19',
    theme_color: '#0b0f19',
    icons: [
      {
        src: '/logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
