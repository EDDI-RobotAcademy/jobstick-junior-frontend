
    export type RemoteKeys = 'myPageApp/App';
    type PackageType<T> = T extends 'myPageApp/App' ? typeof import('myPageApp/App') :any;