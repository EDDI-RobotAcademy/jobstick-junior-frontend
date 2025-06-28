
    export type RemoteKeys = 'jobPostingsApp/App';
    type PackageType<T> = T extends 'jobPostingsApp/App' ? typeof import('jobPostingsApp/App') :any;