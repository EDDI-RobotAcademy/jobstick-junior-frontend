
    export type RemoteKeys = 'membershipApp/App';
    type PackageType<T> = T extends 'membershipApp/App' ? typeof import('membershipApp/App') :any;