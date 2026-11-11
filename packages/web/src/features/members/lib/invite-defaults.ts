import { InvitationType, ProjectType } from '@united/shared';

function invitationType({
  isPlatformPage,
  projectRolesEnabled,
  projectType,
}: InvitationTypeParams): InvitationType {
  if (isPlatformPage) {
    return InvitationType.PLATFORM;
  }
  return projectRolesEnabled && projectType === ProjectType.TEAM
    ? InvitationType.PROJECT
    : InvitationType.PLATFORM;
}

export const inviteDefaults = {
  invitationType,
};

type InvitationTypeParams = {
  isPlatformPage: boolean;
  projectRolesEnabled: boolean;
  projectType: ProjectType | null;
};
