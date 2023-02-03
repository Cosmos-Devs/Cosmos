import type { AdminConfig } from "../types";
import type Service from "./services";

class Controller {
  private service: Service;

  constructor(config: AdminConfig) {
    this.service = config?.service;
  }

  getItem = async (type: string, id: string) => {
    return this.service.getItem(type, id);
  };

  getMediaList = async (page = 0) => {
    return this.service.getMediaList(page);
  };
}
export default Controller;
