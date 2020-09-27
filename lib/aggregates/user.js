import Query from "../../lib/queries_services/aggregates__user.js"
import BaseAggregate from "../base_aggregate.js"

class User extends BaseAggregate {

  container_hash(){
    return {"user_appraisal":{"memo":null},"user_hf_members":[{"hf_member":{"id":null,"last_name_ja":null}}],"email":null,"first_name":null,"last_name":null,"page_language_id":null,"jlpt":null,"is_hope_phone_consulting":null,"agree_policy_at":null,"skill_description":null,"graduate_latest_school_at":null,"gender":null,"phone_num":null,"birth_day":null,"has_driver_license":null,"living_prefecture_id":null,"hope_first_work_country_id":null,"is_hope_work_globaly":null,"research_description":null,"home_country":{"id":null,"name":null},"living_country":{"id":null,"name":null},"living_prefecture":{"id":null,"name":null},"user_survey_answers":[{"survey_id":null,"value":null}],"user_hope_working_prefectures":[{"prefecture_id":null}],"user_interesting_job_categories":[{"job_category_id":null}],"user_language_skills":[{"language":{"name":null,"symbol":null},"speaking_level":{"name":null,"level":null},"listening_level":{"name":null,"level":null},"writing_level":{"name":null,"level":null},"reading_level":{"name":null,"level":null}}],"user_skills":[{"skill_id":null,"description":null}],"user_universities":[{"graduate_at":null,"university":{"id":null,"local_name":null},"university_academic_degree":{"id":null,"name":null},"university_student_category":{"id":null,"name":null},"study_department_category":{"id":null,"name":null}}],"user_job_histories":[{"company_name":null,"job_category_id":null,"job_category_other":null,"job_description":null,"quit_reason_other":null,"user_job_history_quit_reasons":[{"job_history_quit_reason_id":null}]}]}
  }

  query(){
    return Query
  }

}

export default User