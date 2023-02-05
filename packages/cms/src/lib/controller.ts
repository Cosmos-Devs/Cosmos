import type { AdminConfig } from "../types";
import type Service from "./services";

class Controller {
  private service: Service;
  public config: AdminConfig

  constructor(config: AdminConfig) {
    this.config = config;
    this.service = config?.service;
  }

  public getItem = async (type: string, id: string) => {
    return this.service.getItem(type, id);
  };

  public getMediaList = async (page = 0) => {
    return this.service.getMediaList(page);
  };

  public isUserIdentified = async () => {
    return false
  };

}
export default Controller;
