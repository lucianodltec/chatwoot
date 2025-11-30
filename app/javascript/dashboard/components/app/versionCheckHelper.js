import semver from 'semver';

export const hasAnUpdateAvailable = (latestVersion, currentVersion) => {
  console.log(`versionCheckHelper [${latestVersion}] [${currentVersion}]`)
  if (!semver.valid(latestVersion)) {
    return false;
  }
  return semver.lt(currentVersion, latestVersion);
};
