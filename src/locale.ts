type VerySimpleLanguagePackKey =
  | "births"
  | "period"
  | "all"
  | "unregistered"
  | "registered"
  | "home"
  | "inquiry_death_or_birth"
  | "registered_births_count"
  | "registered_deaths_count"
  | "submitted_edit_requests"
  | "ratio_male_to_female"
  | "ratio_male_to_female_deaths"
  | "males"
  | "females"
  | "edit_dob_request"
  | "register_dob"
  | "register_dob_without_id"
  | "register_found_dob"
  | "register_dob_without_id_but_found"
  | "dob_edit_and_inquiry"
  | "request_dob_edit";

const ar: Record<VerySimpleLanguagePackKey, string> = {
  births: "المواليد",
  period: "الفترة",
  all: "الكل",
  unregistered: "غير موثق",
  registered: "موثق",
  home: "الرئيسية",
  inquiry_death_or_birth: "استعلام عن حالة مواليد او وفاة",
  registered_births_count: "عدد المواليد المدخلين",
  registered_deaths_count: "عدد الوفيات المدخلين",
  submitted_edit_requests: "طلبات تعديل مقدمة",
  ratio_male_to_female: "النسبة بين الذكور والإناث للمواليد",
  ratio_male_to_female_deaths: "النسبة بين الذكور والإناث للوفيات",
  males: "ذكور",
  females: "اناث",
  edit_dob_request: "طلب تعديل واقعة ميلاد",
  register_dob: "تسجيل واقعة ميلاد",
  register_dob_without_id: "تسجيل ساقط قيد ميلاد",
  register_found_dob: "تسجيل ميلاد (معثور عليه)",
  register_dob_without_id_but_found: 'تسجيل ميلاد (ساقط قيد معثور عليه)', // TODO: what?
  dob_edit_and_inquiry: "استعلام - تعديل واقعة الميلاد",
  request_dob_edit: "طلب تعديل واقعة ميلاد",
};

export default function t(k: VerySimpleLanguagePackKey) {
  return ar[k];
}
