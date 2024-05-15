export interface SchoolType {
  _id?: number;
  name?: string;
  status?: string;
  startYear?: number;
  identifier?: string;
  endTime?: string;
  hasElectricity?: boolean;
  hasInternet?: boolean;
  semester?: string;
  shift: string;
  spaceType: string;
  startTime?: string;
  totalStudents?: number;
  union?: string;
  town?: string;
  tehsil?: string;
  district?: string;
  province?: string;
  latitude?: number;
  longitude?: number;
  regionalCoordinator?: string;
  schoolCoordinator?: string;
  teacherName?: string;
}

export interface SchoolFeedbackType {
  _id?: number;
  date?: string;
  attendanceShared?: boolean;
  classActivityCompleted?: boolean;
  grade?: string;
  level?: string;
  lessonFeedbackShared?: boolean;
  mediaShared?: boolean;
  miniProjectorUsed?: boolean;
  schoolStatus: string;
  sel: boolean;
  studentsPresent?: number;
  teacherPresent?: boolean;
  comments?: string;
  issues?: string;
}
