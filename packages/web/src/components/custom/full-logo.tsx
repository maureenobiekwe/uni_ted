import { DEFAULT_BRAND_LOGOS } from '@united/shared';
import { t } from 'i18next';

import { flagsHooks } from '@/hooks/flags-hooks';
import { cn } from '@/lib/utils';

import { unitedWordmark } from './united-wordmark';

const FullLogo = ({ className }: { className?: string }) => {
  const branding = flagsHooks.useWebsiteBranding();
  const logoUrl = branding?.logos?.fullLogoUrl;
  const isDefaultLogo = logoUrl === DEFAULT_BRAND_LOGOS.fullLogoUrl;

  return (
    <div className={cn('h-[60px]', className)}>
      {isDefaultLogo && <unitedWordmark />}
      {!isDefaultLogo && logoUrl && (
        <img className="h-full" src={logoUrl} alt={t('logo')} />
      )}
    </div>
  );
};
FullLogo.displayName = 'FullLogo';
export { FullLogo };
