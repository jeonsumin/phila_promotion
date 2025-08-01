export type Stamp = {
    MISSION: string;
}

export type StampState = {
    isLoading: boolean;
    stamp: Stamp[] | null;
}