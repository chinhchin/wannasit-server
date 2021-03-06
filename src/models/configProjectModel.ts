type ProjectConfigModel = {
  url: string;
  sslPort: number;
  httpPort: number;
  sslCertPath: {
    cert: string,
    chain: string,
    privateKey: string
  }
  userControl: {
    reserveTimeRangeInMinutes: number,
    reserveTimeAlertInMinutes: number,
    reserveTimesPerDay: number
  }
}
