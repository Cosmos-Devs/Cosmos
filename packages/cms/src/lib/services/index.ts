import type { ServiceItem, ServiceMedia } from "../../types";

export default abstract class Service {
  public abstract getItem: (type: string, id: string) => Promise<ServiceItem>;

  public abstract getMediaList: (
    page?: number
  ) => Promise<{ media: ServiceMedia[]; page: number }>;
}
