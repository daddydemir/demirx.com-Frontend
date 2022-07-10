import { Note } from "./note";

export interface NoteResponseModel{
    data:Note[],
    message:string,
}