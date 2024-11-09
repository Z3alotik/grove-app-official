export type CreateEventProps = {
  openCreateEvent: boolean;
  handleCloseCreateEvent: () => void;
};

export type EventProps = {
  date: string;
  time: string;
  place: string;
  price: string;
  image: string;
};
