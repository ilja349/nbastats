export interface INBAPlayer  {
    id: number;
    first_name: string;
    last_name: string;
    position: string | null;
    height: string | null;
    weight: string | null;
    jersey_number: string | null;
    college: string | null;
    country: string | null;
    draft_year: number | null;
    draft_round: number | null;
    draft_number: number | null;
    team?: INBATeam;
}

export interface INBATeam {
    id: number;
}