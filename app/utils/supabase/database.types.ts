export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      Answers: {
        Row: {
          created_at: string
          id: number
          number: number | null
          question_id: number | null
          responses: Json | null
        }
        Insert: {
          created_at?: string
          id?: number
          number?: number | null
          question_id?: number | null
          responses?: Json | null
        }
        Update: {
          created_at?: string
          id?: number
          number?: number | null
          question_id?: number | null
          responses?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "Answers_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "Questions"
            referencedColumns: ["id"]
          },
        ]
      }
      AnswerTypes: {
        Row: {
          created_at: string
          id: number
          name: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      Languages: {
        Row: {
          created_at: string
          id: number
          name: string | null
          short: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
          short?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
          short?: string | null
        }
        Relationships: []
      }
      Questions: {
        Row: {
          answer_type_id: number | null
          created_at: string
          id: number
          question: string | null
          survey_id: number | null
          updated_at: string | null
        }
        Insert: {
          answer_type_id?: number | null
          created_at?: string
          id?: number
          question?: string | null
          survey_id?: number | null
          updated_at?: string | null
        }
        Update: {
          answer_type_id?: number | null
          created_at?: string
          id?: number
          question?: string | null
          survey_id?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Questions_answer_type_id_fkey"
            columns: ["answer_type_id"]
            isOneToOne: false
            referencedRelation: "AnswerTypes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Questions_survey_id_fkey"
            columns: ["survey_id"]
            isOneToOne: false
            referencedRelation: "Surveys"
            referencedColumns: ["id"]
          },
        ]
      }
      RedeemHistory: {
        Row: {
          amount: number | null
          created_at: string
          id: number
          survey_id: number | null
          user_id: number | null
        }
        Insert: {
          amount?: number | null
          created_at?: string
          id?: number
          survey_id?: number | null
          user_id?: number | null
        }
        Update: {
          amount?: number | null
          created_at?: string
          id?: number
          survey_id?: number | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "RedeemHistory_survey_id_fkey"
            columns: ["survey_id"]
            isOneToOne: false
            referencedRelation: "Surveys"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "RedeemHistory_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "Users"
            referencedColumns: ["id"]
          },
        ]
      }
      Status: {
        Row: {
          created_at: string
          id: number
          text: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          text?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          text?: string | null
        }
        Relationships: []
      }
      SurveyContracts: {
        Row: {
          contract_address: string | null
          created_at: string
          id: number
          survey_id: number | null
        }
        Insert: {
          contract_address?: string | null
          created_at?: string
          id?: number
          survey_id?: number | null
        }
        Update: {
          contract_address?: string | null
          created_at?: string
          id?: number
          survey_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "SurveyContracts_survey_id_fkey"
            columns: ["survey_id"]
            isOneToOne: false
            referencedRelation: "Surveys"
            referencedColumns: ["id"]
          },
        ]
      }
      Surveys: {
        Row: {
          about_info: string | null
          created_at: string
          description: string | null
          end_date: string | null
          estimated_time: number | null
          expect: Json | null
          id: number
          name: string | null
          paid_amount: number | null
          start_date: string | null
          status_id: number | null
          updated_at: string | null
        }
        Insert: {
          about_info?: string | null
          created_at?: string
          description?: string | null
          end_date?: string | null
          estimated_time?: number | null
          expect?: Json | null
          id?: number
          name?: string | null
          paid_amount?: number | null
          start_date?: string | null
          status_id?: number | null
          updated_at?: string | null
        }
        Update: {
          about_info?: string | null
          created_at?: string
          description?: string | null
          end_date?: string | null
          estimated_time?: number | null
          expect?: Json | null
          id?: number
          name?: string | null
          paid_amount?: number | null
          start_date?: string | null
          status_id?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Surveys_status_id_fkey"
            columns: ["status_id"]
            isOneToOne: false
            referencedRelation: "Status"
            referencedColumns: ["id"]
          },
        ]
      }
      TranslatedAnswers: {
        Row: {
          answer_id: number | null
          created_at: string
          id: number
          language_id: number | null
          text: string | null
        }
        Insert: {
          answer_id?: number | null
          created_at?: string
          id?: number
          language_id?: number | null
          text?: string | null
        }
        Update: {
          answer_id?: number | null
          created_at?: string
          id?: number
          language_id?: number | null
          text?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "TranslatedAnswers_language_id_fkey"
            columns: ["language_id"]
            isOneToOne: false
            referencedRelation: "Languages"
            referencedColumns: ["id"]
          },
        ]
      }
      TranslatedQuestions: {
        Row: {
          created_at: string
          id: number
          language_id: number | null
          question_id: number | null
          text: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          language_id?: number | null
          question_id?: number | null
          text?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          language_id?: number | null
          question_id?: number | null
          text?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "TranslatedQuestions_language_id_fkey"
            columns: ["language_id"]
            isOneToOne: false
            referencedRelation: "Languages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "TranslatedQuestions_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "Questions"
            referencedColumns: ["id"]
          },
        ]
      }
      TranslatedSurveys: {
        Row: {
          created_at: string
          id: number
          language_id: number | null
          survey_id: number | null
          text: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          language_id?: number | null
          survey_id?: number | null
          text?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          language_id?: number | null
          survey_id?: number | null
          text?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "TranslatedSurveys_language_id_fkey"
            columns: ["language_id"]
            isOneToOne: false
            referencedRelation: "Languages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "TranslatedSurveys_survey_id_fkey"
            columns: ["survey_id"]
            isOneToOne: false
            referencedRelation: "Surveys"
            referencedColumns: ["id"]
          },
        ]
      }
      UserResponses: {
        Row: {
          answer: string | null
          created_at: string
          id: number
          language_id: number | null
          question_id: number | null
          updated_at: string | null
          user_id: number | null
        }
        Insert: {
          answer?: string | null
          created_at?: string
          id?: number
          language_id?: number | null
          question_id?: number | null
          updated_at?: string | null
          user_id?: number | null
        }
        Update: {
          answer?: string | null
          created_at?: string
          id?: number
          language_id?: number | null
          question_id?: number | null
          updated_at?: string | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "UserResponses_language_id_fkey"
            columns: ["language_id"]
            isOneToOne: false
            referencedRelation: "Languages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "UserResponses_question_id_fkey"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "Questions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "UserResponses_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "Users"
            referencedColumns: ["id"]
          },
        ]
      }
      Users: {
        Row: {
          completed_surveys: number | null
          created_at: string
          id: number
          last_login: string | null
          reliable_answers: boolean | null
          total_earned: number | null
          updated_at: string | null
          username: string | null
          verified: boolean | null
          wallet_address: string | null
        }
        Insert: {
          completed_surveys?: number | null
          created_at?: string
          id?: number
          last_login?: string | null
          reliable_answers?: boolean | null
          total_earned?: number | null
          updated_at?: string | null
          username?: string | null
          verified?: boolean | null
          wallet_address?: string | null
        }
        Update: {
          completed_surveys?: number | null
          created_at?: string
          id?: number
          last_login?: string | null
          reliable_answers?: boolean | null
          total_earned?: number | null
          updated_at?: string | null
          username?: string | null
          verified?: boolean | null
          wallet_address?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
