import { Gulpclass, Task, SequenceTask } from 'gulpclass';
import { BuildHelper, BuildConfig, BuildEnvironment } from '@morphe/build-angular';


@Gulpclass()
export class Gulpfile {
    private config = new BuildConfig();
    private helper = new BuildHelper(this.config);

    @Task('upgrade-version')
    public upgradeVersion() {
        return this.helper.upgradePackageVersion(BuildEnvironment.Debug);
    }
    @Task('create-manifest')
    public createManifest() {
        return this.helper.createManifestFile();
    }
    @Task('verify-package-list-debug')
    public verifyPackageListDebug(): any {
        return this.helper.verifyPackageList(BuildEnvironment.Debug);
    }
    @Task('clean-debug')
    public cleanDebug() {
        return this.helper.clean(BuildEnvironment.Debug);
    }
    @SequenceTask('build-debug')
    public buildDebug() {
        return this.helper.buildAppTask(BuildEnvironment.Debug);
    }
    @SequenceTask('rebuild-debug')
    public rebuildDebug() {
        return ['clean-debug', 'create-manifest', 'build-debug'];
    }
    @SequenceTask('watch-debug')
    public watchDebug() {
        return this.helper.watchAppTask(BuildEnvironment.Debug);
    }

    @Task('verify-package-list-release')
    public verifyPackageListRelease(): any {
        return this.helper.verifyPackageList(BuildEnvironment.Release);
    }
    @Task('clean-release')
    public cleanRelease() {
        return this.helper.clean(BuildEnvironment.Release);
    }
    @SequenceTask('build-release')
    public buildRelease() {
        return this.helper.buildAppTask(BuildEnvironment.Release);
    }
    @SequenceTask('rebuild-release')
    public rebuildRelease() {
        return ['clean-release', 'create-manifest', 'build-release'];
    }
    @SequenceTask('watch-release')
    public watchRelease() {
        return this.helper.watchAppTask(BuildEnvironment.Release);
    }
    @SequenceTask('default')
    public default() { // because this task has "default" name it will be run as default gulp task
        return ['rebuild-debug'];
    }
}
