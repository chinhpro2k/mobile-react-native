export enum KeywordType {
  KHOP_TAT_CA_DAU = "Khớp tất cả từ (Phân biệt dấu)",
  KHOP_TAT_CA_KHONG_DAU = "Khớp tất cả từ (Không phân biệt dấu)",
  KHOP_TU_DAU = "Khớp từ hoặc một số từ (Phân biệt dấu)",
  KHOP_TU_KHONG_DAU = "Khớp từ hoặc một số từ (Không phân biệt dấu)",
  CHINH_XAC = "Khớp chính xác cụm từ",
}
export enum LinhVuc {
  OTHER = "Khác",
  HH = "Hàng hoá",
  XL = "Xây lắp",
  PTV = "Phi tư vấn",
  TV = "Tư vấn",
  HON_HOP = "Hỗn hợp",
}
export enum TrangThaiThau {
  DXT = "Đang xét thầu",
  CNTTT = "Có nhà thầu trúng thầu",
  KCNTTT = "Không có nhà thầu trúng thầu",
  DHT = "Đã huỷ thầu",
  CMT = "Chưa mở thầu",
}

export enum QuyTrinh {
  TAT_CA = "Tất cả",
  LDT = "Luật đấu thầu",
  ADB = "ADB",
  WB = "WB",
  CPTPP = "CPTPP",
  EVFTA = "EVFTA/UKVFTA",
  UKFTA = "CPTPP/EVFTA/UKVFTA",
  KHAC = "Khác",
}
export const KeywordCat = [
  "Dự án",
  "Kế hoạch lựa chọn nhà thầu",
  "Thông báo mời sơ tuyển",
  "Thông báo mời quan tâm",
  "Kết quả sơ tuyển",
  "Kết quả mời quan tâm",
  "Thông báo mời thầu",
];
export enum CatSort {
  KE_HOACH_LUA_CHON = "Kế hoạch lựa chọn nhà thầu",
  THONG_BAO_MOI_THAU = "Thông báo mời thầu/Tên gói thầu",
}
export const PlanTypeVe = [
  {
    code: "DTPT",
    name: "Chi đầu tư phát triển",
    categoryTypeCode: "DM_KHLCNT",
  },
  {
    code: "TX",
    name: "Chi thường xuyên",
    categoryTypeCode: "DM_KHLCNT",
  },
  {
    code: "KHAC",
    name: "Khác",
    categoryTypeCode: "DM_KHLCNT",
  },
];
export const LoaiHopDong = [
  {
    "code": "DGCD",
    "name": "Theo đơn giá cố định",
    "categoryTypeCode": "DM_LHDLCNT"
  },
  {
    "code": "DGDC",
    "name": "Theo đơn giá điều chỉnh",
    "categoryTypeCode": "DM_LHDLCNT"
  },
  {
    "code": "TTG",
    "name": "Theo thời gian",
    "categoryTypeCode": "DM_LHDLCNT"
  },
  {
    "code": "TG_DGCD",
    "name": "Trọn gói và Theo đơn giá cố định",
    "categoryTypeCode": "DM_LHDLCNT"
  },
  {
    "code": "TG_DGDC",
    "name": "Trọn gói và Theo đơn giá điều chỉnh",
    "categoryTypeCode": "DM_LHDLCNT"
  },
  {
    "code": "DGCD_DC",
    "name": "Theo đơn giá cố định và Theo đơn giá điều chỉnh",
    "categoryTypeCode": "DM_LHDLCNT"
  },
  {
    "code": "TG_CD_DC",
    "name": "Trọn gói, Theo đơn giá cố định và Theo đơn giá điều chỉnh",
    "categoryTypeCode": "DM_LHDLCNT"
  },
  {
    "code": "TG_CD_TTG",
    "name": "Trọn gói, Theo đơn giá cố định và Theo thời gian",
    "categoryTypeCode": "DM_LHDLCNT"
  },
  {
    "code": "TG_DC_TTG",
    "name": "Trọn gói, Theo đơn giá điều chỉnh và Theo thời gian",
    "categoryTypeCode": "DM_LHDLCNT"
  },
  {
    "code": "CD_DC_TTG",
    "name": "Theo đơn giá cố định, Theo đơn giá điều chỉnh và Theo thời gian",
    "categoryTypeCode": "DM_LHDLCNT"
  },
  {
    "code": "TG_CD_DC_TTG",
    "name": "Trọn gói, Theo đơn giá cố định, Theo đơn giá điều chỉnh và Theo thời gian",
    "categoryTypeCode": "DM_LHDLCNT"
  },
  {
    "code": "CD_TTG",
    "name": "Theo đơn giá cố định và Theo thời gian",
    "categoryTypeCode": "DM_LHDLCNT"
  },
  {
    "code": "DC_TTG",
    "name": "Theo đơn giá điều chỉnh và Theo thời gian",
    "categoryTypeCode": "DM_LHDLCNT"
  },
  {
    "code": "TG_TTG",
    "name": "Trọn gói và Theo thời gian",
    "categoryTypeCode": "DM_LHDLCNT"
  },
  {
    "code": "TGG_CD_DC",
    "name": "Theo thời gian, Theo đơn giá cố định và đơn giá điều chỉnh",
    "categoryTypeCode": "DM_LHDLCNT"
  },
  {
    "code": "TGG_DGCD",
    "name": "Theo thời gian và Theo đơn giá cố định",
    "categoryTypeCode": "DM_LHDLCNT"
  },
  {
    "code": "TGG_DGDC",
    "name": "Theo thời gian và Theo đơn giá điều chỉnh",
    "categoryTypeCode": "DM_LHDLCNT"
  },
  {
    "code": "TG",
    "name": "Trọn gói",
    "categoryTypeCode": "DM_LHDLCNT"
  },
  {
    "code": "KHAC",
    "name": "Khác",
    "categoryTypeCode": "DM_LHDLCNT"
  }
];
export const bidForms = [
  {
    "code": "DTRR",
    "name": "Đấu thầu rộng rãi",
    "categoryTypeCode": "DM_HTLCNT"
  },
  {
    "code": "CHCT",
    "name": "Chào hàng cạnh tranh",
    "categoryTypeCode": "DM_HTLCNT"
  },
  {
    "code": "CHCTRG",
    "name": "Chào hàng cạnh tranh rút gọn",
    "categoryTypeCode": "DM_HTLCNT"
  },
  {
    "code": "DTHC",
    "name": "Đấu thầu hạn chế",
    "categoryTypeCode": "DM_HTLCNT"
  },
  {
    "code": "MSTT",
    "name": "Mua sắm trực tiếp",
    "categoryTypeCode": "DM_HTLCNT"
  },
  {
    "code": "CDT",
    "name": "Chỉ định thầu",
    "categoryTypeCode": "DM_HTLCNT"
  },
  {
    "code": "CDTRG",
    "name": "Chỉ định thầu rút gọn",
    "categoryTypeCode": "DM_HTLCNT"
  },
  {
    "code": "TTH",
    "name": "Tự thực hiện",
    "categoryTypeCode": "DM_HTLCNT"
  },
  {
    "code": "LCNT_DB",
    "name": "Lựa chọn nhà thầu trong trường hợp đặc biệt",
    "categoryTypeCode": "DM_HTLCNT"
  },
  {
    "code": "TVCN",
    "name": "Tư vấn cá nhân",
    "categoryTypeCode": "DM_HTLCNT"
  },
  {
    "code": "TCTVCN",
    "name": "Tuyển chọn tư vấn cá nhân",
    "categoryTypeCode": "DM_HTLCNT"
  },
  {
    "code": "DPCT",
    "name": "Đàm phán cạnh tranh",
    "categoryTypeCode": "DM_HTLCNT"
  },
  {
    "code": "QCBS",
    "name": "Tuyển chọn trên cơ sở Chất lượng và Chi phí (QCBS)",
    "categoryTypeCode": "DM_HTLCNT"
  },
  {
    "code": "DPG",
    "name": "Đàm phán giá",
    "categoryTypeCode": "DM_HTLCNT"
  },
  {
    "code": "QBS",
    "name": "Tuyển chọn tư vấn dựa trên cơ sở chất lượng (QBS)",
    "categoryTypeCode": "DM_HTLCNT"
  },
  {
    "code": "FBS",
    "name": "Lựa chọn theo mức ngân sách cố định (FBS),",
    "categoryTypeCode": "DM_HTLCNT"
  },
  {
    "code": "LCS",
    "name": "Tuyển chọn tư vấn có chi phí thấp nhất (LCS)",
    "categoryTypeCode": "DM_HTLCNT"
  },
  {
    "code": "CQS",
    "name": "Tuyển chọn dựa trên năng lực (CQS)",
    "categoryTypeCode": "DM_HTLCNT"
  },
  {
    "code": "SSS",
    "name": "Tuyển chọn từ một nguồn duy nhất (SSS)",
    "categoryTypeCode": "DM_HTLCNT"
  },
  {
    "code": "TGTC",
    "name": "Tuyển chọn tư vấn trong các khoản vay cho các thể chế hoặc tổ chức trung gian tài chính",
    "categoryTypeCode": "DM_HTLCNT"
  },
  {
    "code": "NHBD",
    "name": "Tuyển chọn tư vấn trong các khoản vay được Ngân hàng bảo đảm",
    "categoryTypeCode": "DM_HTLCNT"
  },
  {
    "code": "TVCT",
    "name": "Tuyển chọn một số loại hình tư vấn cụ thể",
    "categoryTypeCode": "DM_HTLCNT"
  },
  {
    "code": "TGTHCD",
    "name": "Tham gia thực hiện cộng đồng",
    "categoryTypeCode": "DM_HTLCNT"
  }
];
export const dmPtlcnt=[
  {
    "code": "1_MTHS",
    "name": "Một giai đoạn một túi hồ sơ",
    "categoryTypeCode": "DM_PTLCNT"
  },
  {
    "code": "1_HTHS",
    "name": "Một giai đoạn hai túi hồ sơ",
    "categoryTypeCode": "DM_PTLCNT"
  },
  {
    "code": "2_MTHS",
    "name": "Hai giai đoạn một túi hồ sơ",
    "categoryTypeCode": "DM_PTLCNT"
  },
  {
    "code": "2_HTHS",
    "name": "Hai giai đoạn hai túi hồ sơ",
    "categoryTypeCode": "DM_PTLCNT"
  }
]