export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      active_sessions: {
        Row: {
          created_at: string | null
          download_mbps: number
          expires_at: string
          id: string
          ip_address: string
          mac_address: string
          package_name: string
          router_identity: string
          start_time: string
          upload_mbps: number
          username: string
        }
        Insert: {
          created_at?: string | null
          download_mbps: number
          expires_at: string
          id: string
          ip_address: string
          mac_address: string
          package_name: string
          router_identity: string
          start_time: string
          upload_mbps: number
          username: string
        }
        Update: {
          created_at?: string | null
          download_mbps?: number
          expires_at?: string
          id?: string
          ip_address?: string
          mac_address?: string
          package_name?: string
          router_identity?: string
          start_time?: string
          upload_mbps?: number
          username?: string
        }
        Relationships: []
      }
      ad_analytics: {
        Row: {
          browser: string | null
          campaignId: string
          city: string | null
          country: string | null
          createdAt: string
          deviceType: string | null
          eventType: Database["public"]["Enums"]["enum_ad_analytics_eventType"]
          id: string
          ipAddress: string | null
          macAddress: string | null
          os: string | null
          packageId: string | null
          revenue: number | null
          routerId: string | null
          sessionDuration: number | null
          tenantId: string
          updatedAt: string
        }
        Insert: {
          browser?: string | null
          campaignId: string
          city?: string | null
          country?: string | null
          createdAt: string
          deviceType?: string | null
          eventType: Database["public"]["Enums"]["enum_ad_analytics_eventType"]
          id: string
          ipAddress?: string | null
          macAddress?: string | null
          os?: string | null
          packageId?: string | null
          revenue?: number | null
          routerId?: string | null
          sessionDuration?: number | null
          tenantId: string
          updatedAt: string
        }
        Update: {
          browser?: string | null
          campaignId?: string
          city?: string | null
          country?: string | null
          createdAt?: string
          deviceType?: string | null
          eventType?: Database["public"]["Enums"]["enum_ad_analytics_eventType"]
          id?: string
          ipAddress?: string | null
          macAddress?: string | null
          os?: string | null
          packageId?: string | null
          revenue?: number | null
          routerId?: string | null
          sessionDuration?: number | null
          tenantId?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "ad_analytics_campaignId_fkey"
            columns: ["campaignId"]
            isOneToOne: false
            referencedRelation: "ad_campaigns"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ad_analytics_tenantId_fkey"
            columns: ["tenantId"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      ad_campaigns: {
        Row: {
          abSiblingId: string | null
          abTestEnabled: boolean | null
          abVariant: string | null
          approvalStatus:
            | Database["public"]["Enums"]["enum_ad_campaigns_approvalStatus"]
            | null
          approvedBy: string | null
          budget: number | null
          buttonText: string | null
          campaignType:
            | Database["public"]["Enums"]["enum_ad_campaigns_campaignType"]
            | null
          createdAt: string
          ctaType:
            | Database["public"]["Enums"]["enum_ad_campaigns_ctaType"]
            | null
          daysOfWeek: string | null
          description: string | null
          destinationUrl: string | null
          displayRules: string | null
          emailLink: string | null
          endDate: string | null
          endTime: string | null
          facebookLink: string | null
          headline: string | null
          id: string
          instagramLink: string | null
          isRecurring: boolean | null
          marketingTrigger: string | null
          mediaUrls: string | null
          name: string
          priority: number | null
          rotationType:
            | Database["public"]["Enums"]["enum_ad_campaigns_rotationType"]
            | null
          spentBudget: number | null
          startDate: string | null
          startTime: string | null
          status: Database["public"]["Enums"]["enum_ad_campaigns_status"] | null
          subheading: string | null
          targeting: string | null
          tenantId: string
          tiktokLink: string | null
          updatedAt: string
          weight: number | null
          whatsappLink: string | null
        }
        Insert: {
          abSiblingId?: string | null
          abTestEnabled?: boolean | null
          abVariant?: string | null
          approvalStatus?:
            | Database["public"]["Enums"]["enum_ad_campaigns_approvalStatus"]
            | null
          approvedBy?: string | null
          budget?: number | null
          buttonText?: string | null
          campaignType?:
            | Database["public"]["Enums"]["enum_ad_campaigns_campaignType"]
            | null
          createdAt: string
          ctaType?:
            | Database["public"]["Enums"]["enum_ad_campaigns_ctaType"]
            | null
          daysOfWeek?: string | null
          description?: string | null
          destinationUrl?: string | null
          displayRules?: string | null
          emailLink?: string | null
          endDate?: string | null
          endTime?: string | null
          facebookLink?: string | null
          headline?: string | null
          id: string
          instagramLink?: string | null
          isRecurring?: boolean | null
          marketingTrigger?: string | null
          mediaUrls?: string | null
          name: string
          priority?: number | null
          rotationType?:
            | Database["public"]["Enums"]["enum_ad_campaigns_rotationType"]
            | null
          spentBudget?: number | null
          startDate?: string | null
          startTime?: string | null
          status?:
            | Database["public"]["Enums"]["enum_ad_campaigns_status"]
            | null
          subheading?: string | null
          targeting?: string | null
          tenantId: string
          tiktokLink?: string | null
          updatedAt: string
          weight?: number | null
          whatsappLink?: string | null
        }
        Update: {
          abSiblingId?: string | null
          abTestEnabled?: boolean | null
          abVariant?: string | null
          approvalStatus?:
            | Database["public"]["Enums"]["enum_ad_campaigns_approvalStatus"]
            | null
          approvedBy?: string | null
          budget?: number | null
          buttonText?: string | null
          campaignType?:
            | Database["public"]["Enums"]["enum_ad_campaigns_campaignType"]
            | null
          createdAt?: string
          ctaType?:
            | Database["public"]["Enums"]["enum_ad_campaigns_ctaType"]
            | null
          daysOfWeek?: string | null
          description?: string | null
          destinationUrl?: string | null
          displayRules?: string | null
          emailLink?: string | null
          endDate?: string | null
          endTime?: string | null
          facebookLink?: string | null
          headline?: string | null
          id?: string
          instagramLink?: string | null
          isRecurring?: boolean | null
          marketingTrigger?: string | null
          mediaUrls?: string | null
          name?: string
          priority?: number | null
          rotationType?:
            | Database["public"]["Enums"]["enum_ad_campaigns_rotationType"]
            | null
          spentBudget?: number | null
          startDate?: string | null
          startTime?: string | null
          status?:
            | Database["public"]["Enums"]["enum_ad_campaigns_status"]
            | null
          subheading?: string | null
          targeting?: string | null
          tenantId?: string
          tiktokLink?: string | null
          updatedAt?: string
          weight?: number | null
          whatsappLink?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ad_campaigns_tenantId_fkey"
            columns: ["tenantId"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      admin_users: {
        Row: {
          altPhone: string | null
          city: string | null
          commissionRate: number | null
          country: string | null
          countyState: string | null
          createdAt: string
          displayName: string | null
          email: string
          firstName: string | null
          id: string
          lastName: string | null
          lastPasswordChange: string | null
          password: string
          phone: string | null
          physicalAddress: string | null
          postalCode: string | null
          preferredLanguage: string | null
          profilePhotoUrl: string | null
          role: Database["public"]["Enums"]["enum_admin_users_role"] | null
          tenantId: string | null
          themePreference:
            | Database["public"]["Enums"]["enum_admin_users_themePreference"]
            | null
          timeZone: string | null
          twoFactorEnabled: boolean | null
          twoFactorMethod: string | null
          updatedAt: string
          username: string | null
        }
        Insert: {
          altPhone?: string | null
          city?: string | null
          commissionRate?: number | null
          country?: string | null
          countyState?: string | null
          createdAt: string
          displayName?: string | null
          email: string
          firstName?: string | null
          id: string
          lastName?: string | null
          lastPasswordChange?: string | null
          password: string
          phone?: string | null
          physicalAddress?: string | null
          postalCode?: string | null
          preferredLanguage?: string | null
          profilePhotoUrl?: string | null
          role?: Database["public"]["Enums"]["enum_admin_users_role"] | null
          tenantId?: string | null
          themePreference?:
            | Database["public"]["Enums"]["enum_admin_users_themePreference"]
            | null
          timeZone?: string | null
          twoFactorEnabled?: boolean | null
          twoFactorMethod?: string | null
          updatedAt: string
          username?: string | null
        }
        Update: {
          altPhone?: string | null
          city?: string | null
          commissionRate?: number | null
          country?: string | null
          countyState?: string | null
          createdAt?: string
          displayName?: string | null
          email?: string
          firstName?: string | null
          id?: string
          lastName?: string | null
          lastPasswordChange?: string | null
          password?: string
          phone?: string | null
          physicalAddress?: string | null
          postalCode?: string | null
          preferredLanguage?: string | null
          profilePhotoUrl?: string | null
          role?: Database["public"]["Enums"]["enum_admin_users_role"] | null
          tenantId?: string | null
          themePreference?:
            | Database["public"]["Enums"]["enum_admin_users_themePreference"]
            | null
          timeZone?: string | null
          twoFactorEnabled?: boolean | null
          twoFactorMethod?: string | null
          updatedAt?: string
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "admin_users_tenantId_fkey"
            columns: ["tenantId"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      adminSessions: {
        Row: {
          createdAt: string
          expiryTime: string
          id: string
          ipAddress: string
          lastActivity: string | null
          loginTime: string | null
          status:
            | Database["public"]["Enums"]["enum_adminSessions_status"]
            | null
          tokenHash: string
          updatedAt: string
          userAgent: string | null
          userId: string
        }
        Insert: {
          createdAt: string
          expiryTime: string
          id: string
          ipAddress: string
          lastActivity?: string | null
          loginTime?: string | null
          status?:
            | Database["public"]["Enums"]["enum_adminSessions_status"]
            | null
          tokenHash: string
          updatedAt: string
          userAgent?: string | null
          userId: string
        }
        Update: {
          createdAt?: string
          expiryTime?: string
          id?: string
          ipAddress?: string
          lastActivity?: string | null
          loginTime?: string | null
          status?:
            | Database["public"]["Enums"]["enum_adminSessions_status"]
            | null
          tokenHash?: string
          updatedAt?: string
          userAgent?: string | null
          userId?: string
        }
        Relationships: []
      }
      api_keys: {
        Row: {
          created_at: string
          id: string
          key_hash: string
          key_prefix: string
          last_used_at: string | null
          name: string
          revoked_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          key_hash: string
          key_prefix: string
          last_used_at?: string | null
          name?: string
          revoked_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          key_hash?: string
          key_prefix?: string
          last_used_at?: string | null
          name?: string
          revoked_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      auditLogs: {
        Row: {
          action: string
          createdAt: string
          details: string | null
          id: string
          ipAddress: string | null
          tenantId: string | null
          updatedAt: string
          userId: string | null
        }
        Insert: {
          action: string
          createdAt: string
          details?: string | null
          id: string
          ipAddress?: string | null
          tenantId?: string | null
          updatedAt: string
          userId?: string | null
        }
        Update: {
          action?: string
          createdAt?: string
          details?: string | null
          id?: string
          ipAddress?: string | null
          tenantId?: string | null
          updatedAt?: string
          userId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "auditLogs_tenantId_fkey"
            columns: ["tenantId"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "auditLogs_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "admin_users"
            referencedColumns: ["id"]
          },
        ]
      }
      backend_build_snapshots: {
        Row: {
          created_at: string | null
          id: string
          packages_count: number | null
          routers_count: number | null
          sessions_count: number | null
          store_json: Json | null
          transactions_count: number | null
        }
        Insert: {
          created_at?: string | null
          id: string
          packages_count?: number | null
          routers_count?: number | null
          sessions_count?: number | null
          store_json?: Json | null
          transactions_count?: number | null
        }
        Update: {
          created_at?: string | null
          id?: string
          packages_count?: number | null
          routers_count?: number | null
          sessions_count?: number | null
          store_json?: Json | null
          transactions_count?: number | null
        }
        Relationships: []
      }
      call_history: {
        Row: {
          call_type: string
          called_at: string
          contact_name: string
          contact_peer_id: string
          duration: string | null
          id: number
          user_id: string
        }
        Insert: {
          call_type: string
          called_at?: string
          contact_name: string
          contact_peer_id: string
          duration?: string | null
          id?: number
          user_id: string
        }
        Update: {
          call_type?: string
          called_at?: string
          contact_name?: string
          contact_peer_id?: string
          duration?: string | null
          id?: number
          user_id?: string
        }
        Relationships: []
      }
      campaignLogs: {
        Row: {
          campaignId: string
          createdAt: string
          error: string | null
          id: string
          providerReference: string | null
          sentAt: string | null
          status: Database["public"]["Enums"]["enum_campaignLogs_status"] | null
          subscriberId: string
          updatedAt: string
        }
        Insert: {
          campaignId: string
          createdAt: string
          error?: string | null
          id: string
          providerReference?: string | null
          sentAt?: string | null
          status?:
            | Database["public"]["Enums"]["enum_campaignLogs_status"]
            | null
          subscriberId: string
          updatedAt: string
        }
        Update: {
          campaignId?: string
          createdAt?: string
          error?: string | null
          id?: string
          providerReference?: string | null
          sentAt?: string | null
          status?:
            | Database["public"]["Enums"]["enum_campaignLogs_status"]
            | null
          subscriberId?: string
          updatedAt?: string
        }
        Relationships: []
      }
      campaigns: {
        Row: {
          content: string
          createdAt: string
          failedCount: number | null
          filterCriteria: string | null
          id: string
          name: string
          scheduledAt: string | null
          sentCount: number | null
          status: Database["public"]["Enums"]["enum_campaigns_status"] | null
          subject: string | null
          templateId: string | null
          tenantId: string
          totalRecipients: number | null
          type: Database["public"]["Enums"]["enum_campaigns_type"]
          updatedAt: string
        }
        Insert: {
          content: string
          createdAt: string
          failedCount?: number | null
          filterCriteria?: string | null
          id: string
          name: string
          scheduledAt?: string | null
          sentCount?: number | null
          status?: Database["public"]["Enums"]["enum_campaigns_status"] | null
          subject?: string | null
          templateId?: string | null
          tenantId: string
          totalRecipients?: number | null
          type: Database["public"]["Enums"]["enum_campaigns_type"]
          updatedAt: string
        }
        Update: {
          content?: string
          createdAt?: string
          failedCount?: number | null
          filterCriteria?: string | null
          id?: string
          name?: string
          scheduledAt?: string | null
          sentCount?: number | null
          status?: Database["public"]["Enums"]["enum_campaigns_status"] | null
          subject?: string | null
          templateId?: string | null
          tenantId?: string
          totalRecipients?: number | null
          type?: Database["public"]["Enums"]["enum_campaigns_type"]
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "campaigns_templateId_fkey"
            columns: ["templateId"]
            isOneToOne: false
            referencedRelation: "messageTemplates"
            referencedColumns: ["id"]
          },
        ]
      }
      compensation_rules: {
        Row: {
          autoApprove: boolean | null
          compensationType:
            | Database["public"]["Enums"]["enum_compensation_rules_compensationType"]
            | null
          compensationValue: number | null
          createdAt: string
          downtimeThresholdMinutes: number | null
          id: string
          isEnabled: boolean | null
          name: string
          tenantId: string
          triggerType:
            | Database["public"]["Enums"]["enum_compensation_rules_triggerType"]
            | null
          updatedAt: string
        }
        Insert: {
          autoApprove?: boolean | null
          compensationType?:
            | Database["public"]["Enums"]["enum_compensation_rules_compensationType"]
            | null
          compensationValue?: number | null
          createdAt: string
          downtimeThresholdMinutes?: number | null
          id: string
          isEnabled?: boolean | null
          name: string
          tenantId: string
          triggerType?:
            | Database["public"]["Enums"]["enum_compensation_rules_triggerType"]
            | null
          updatedAt: string
        }
        Update: {
          autoApprove?: boolean | null
          compensationType?:
            | Database["public"]["Enums"]["enum_compensation_rules_compensationType"]
            | null
          compensationValue?: number | null
          createdAt?: string
          downtimeThresholdMinutes?: number | null
          id?: string
          isEnabled?: boolean | null
          name?: string
          tenantId?: string
          triggerType?:
            | Database["public"]["Enums"]["enum_compensation_rules_triggerType"]
            | null
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "compensation_rules_tenantId_fkey"
            columns: ["tenantId"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      contacts: {
        Row: {
          created_at: string
          id: number
          name: string
          peer_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
          peer_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
          peer_id?: string
          user_id?: string
        }
        Relationships: []
      }
      creator_uploads: {
        Row: {
          created_at: string | null
          creator_email: string
          description: string | null
          id: string
          is_vip_only: boolean | null
          preview_url: string | null
          price_kes: number | null
          tags: string | null
          title: string
          video_url: string
        }
        Insert: {
          created_at?: string | null
          creator_email: string
          description?: string | null
          id?: string
          is_vip_only?: boolean | null
          preview_url?: string | null
          price_kes?: number | null
          tags?: string | null
          title: string
          video_url: string
        }
        Update: {
          created_at?: string | null
          creator_email?: string
          description?: string | null
          id?: string
          is_vip_only?: boolean | null
          preview_url?: string | null
          price_kes?: number | null
          tags?: string | null
          title?: string
          video_url?: string
        }
        Relationships: []
      }
      customer_segments: {
        Row: {
          createdAt: string
          description: string | null
          id: string
          memberCount: number | null
          name: string
          rules: string | null
          tenantId: string
          updatedAt: string
        }
        Insert: {
          createdAt: string
          description?: string | null
          id: string
          memberCount?: number | null
          name: string
          rules?: string | null
          tenantId: string
          updatedAt: string
        }
        Update: {
          createdAt?: string
          description?: string | null
          id?: string
          memberCount?: number | null
          name?: string
          rules?: string | null
          tenantId?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "customer_segments_tenantId_fkey"
            columns: ["tenantId"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      device_bindings: {
        Row: {
          bindingType:
            | Database["public"]["Enums"]["enum_device_bindings_bindingType"]
            | null
          comments: string | null
          createdAt: string
          deviceType:
            | Database["public"]["Enums"]["enum_device_bindings_deviceType"]
            | null
          id: string
          macAddress: string
          routerId: string
          subscriberId: string | null
          tenantId: string
          updatedAt: string
        }
        Insert: {
          bindingType?:
            | Database["public"]["Enums"]["enum_device_bindings_bindingType"]
            | null
          comments?: string | null
          createdAt: string
          deviceType?:
            | Database["public"]["Enums"]["enum_device_bindings_deviceType"]
            | null
          id: string
          macAddress: string
          routerId: string
          subscriberId?: string | null
          tenantId: string
          updatedAt: string
        }
        Update: {
          bindingType?:
            | Database["public"]["Enums"]["enum_device_bindings_bindingType"]
            | null
          comments?: string | null
          createdAt?: string
          deviceType?:
            | Database["public"]["Enums"]["enum_device_bindings_deviceType"]
            | null
          id?: string
          macAddress?: string
          routerId?: string
          subscriberId?: string | null
          tenantId?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "device_bindings_routerId_fkey"
            columns: ["routerId"]
            isOneToOne: false
            referencedRelation: "routers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "device_bindings_subscriberId_fkey"
            columns: ["subscriberId"]
            isOneToOne: false
            referencedRelation: "subscribers"
            referencedColumns: ["id"]
          },
        ]
      }
      dormantRouterPolicies: {
        Row: {
          actionOnDormant:
            | Database["public"]["Enums"]["enum_dormantRouterPolicies_actionOnDormant"]
            | null
          autoActionEnabled: boolean | null
          createdAt: string
          dormantThresholdMinutes: number | null
          id: string
          lastExecutionAt: string | null
          lastExecutionSummary: string | null
          notifyPlatformOwner: boolean | null
          notifyTenantAdmin: boolean | null
          updatedAt: string
        }
        Insert: {
          actionOnDormant?:
            | Database["public"]["Enums"]["enum_dormantRouterPolicies_actionOnDormant"]
            | null
          autoActionEnabled?: boolean | null
          createdAt: string
          dormantThresholdMinutes?: number | null
          id: string
          lastExecutionAt?: string | null
          lastExecutionSummary?: string | null
          notifyPlatformOwner?: boolean | null
          notifyTenantAdmin?: boolean | null
          updatedAt: string
        }
        Update: {
          actionOnDormant?:
            | Database["public"]["Enums"]["enum_dormantRouterPolicies_actionOnDormant"]
            | null
          autoActionEnabled?: boolean | null
          createdAt?: string
          dormantThresholdMinutes?: number | null
          id?: string
          lastExecutionAt?: string | null
          lastExecutionSummary?: string | null
          notifyPlatformOwner?: boolean | null
          notifyTenantAdmin?: boolean | null
          updatedAt?: string
        }
        Relationships: []
      }
      downtime_records: {
        Row: {
          compensationPerSubscriberCents: number | null
          createdAt: string
          downtimeMinutes: number | null
          id: string
          incidentId: string | null
          reason: string
          routerId: string
          subscriberCount: number | null
          tenantId: string
          totalCompensationCents: number | null
          updatedAt: string
        }
        Insert: {
          compensationPerSubscriberCents?: number | null
          createdAt: string
          downtimeMinutes?: number | null
          id: string
          incidentId?: string | null
          reason: string
          routerId: string
          subscriberCount?: number | null
          tenantId: string
          totalCompensationCents?: number | null
          updatedAt: string
        }
        Update: {
          compensationPerSubscriberCents?: number | null
          createdAt?: string
          downtimeMinutes?: number | null
          id?: string
          incidentId?: string | null
          reason?: string
          routerId?: string
          subscriberCount?: number | null
          tenantId?: string
          totalCompensationCents?: number | null
          updatedAt?: string
        }
        Relationships: []
      }
      enterprise_leads: {
        Row: {
          activeUserCount: number | null
          altPhone: string | null
          assignedTo: string | null
          companyName: string
          contactPerson: string
          country: string | null
          createdAt: string
          currentBillingPlatform: string | null
          currentIspSize: string | null
          email: string
          expectedGrowth: string | null
          expectedLaunchDate: string | null
          id: string
          leadNumber: string
          monthlyBudget: string | null
          notes: string | null
          phone: string
          physicalAddress: string | null
          position: string | null
          region: string | null
          registrationNumber: string | null
          requiredFeatures: string | null
          routerCount: number | null
          status:
            | Database["public"]["Enums"]["enum_enterprise_leads_status"]
            | null
          subscriberCount: number | null
          updatedAt: string
          website: string | null
        }
        Insert: {
          activeUserCount?: number | null
          altPhone?: string | null
          assignedTo?: string | null
          companyName: string
          contactPerson: string
          country?: string | null
          createdAt: string
          currentBillingPlatform?: string | null
          currentIspSize?: string | null
          email: string
          expectedGrowth?: string | null
          expectedLaunchDate?: string | null
          id: string
          leadNumber: string
          monthlyBudget?: string | null
          notes?: string | null
          phone: string
          physicalAddress?: string | null
          position?: string | null
          region?: string | null
          registrationNumber?: string | null
          requiredFeatures?: string | null
          routerCount?: number | null
          status?:
            | Database["public"]["Enums"]["enum_enterprise_leads_status"]
            | null
          subscriberCount?: number | null
          updatedAt: string
          website?: string | null
        }
        Update: {
          activeUserCount?: number | null
          altPhone?: string | null
          assignedTo?: string | null
          companyName?: string
          contactPerson?: string
          country?: string | null
          createdAt?: string
          currentBillingPlatform?: string | null
          currentIspSize?: string | null
          email?: string
          expectedGrowth?: string | null
          expectedLaunchDate?: string | null
          id?: string
          leadNumber?: string
          monthlyBudget?: string | null
          notes?: string | null
          phone?: string
          physicalAddress?: string | null
          position?: string | null
          region?: string | null
          registrationNumber?: string | null
          requiredFeatures?: string | null
          routerCount?: number | null
          status?:
            | Database["public"]["Enums"]["enum_enterprise_leads_status"]
            | null
          subscriberCount?: number | null
          updatedAt?: string
          website?: string | null
        }
        Relationships: []
      }
      enterprise_quotes: {
        Row: {
          contractDurationMonths: number | null
          createdAt: string
          customerNotes: string | null
          customModules: string | null
          discountCents: number | null
          id: string
          leadId: string
          maxActiveUsers: number | null
          maxRouters: number | null
          monthlyCostCents: number
          quoteNumber: string
          rejectionReason: string | null
          setupFeeCents: number | null
          smsAllocation: number | null
          status:
            | Database["public"]["Enums"]["enum_enterprise_quotes_status"]
            | null
          storageAllocationMB: number | null
          taxPercentage: number | null
          tenantId: string | null
          termsAndConditions: string | null
          updatedAt: string
          validUntil: string | null
          whatsappAllocation: number | null
        }
        Insert: {
          contractDurationMonths?: number | null
          createdAt: string
          customerNotes?: string | null
          customModules?: string | null
          discountCents?: number | null
          id: string
          leadId: string
          maxActiveUsers?: number | null
          maxRouters?: number | null
          monthlyCostCents: number
          quoteNumber: string
          rejectionReason?: string | null
          setupFeeCents?: number | null
          smsAllocation?: number | null
          status?:
            | Database["public"]["Enums"]["enum_enterprise_quotes_status"]
            | null
          storageAllocationMB?: number | null
          taxPercentage?: number | null
          tenantId?: string | null
          termsAndConditions?: string | null
          updatedAt: string
          validUntil?: string | null
          whatsappAllocation?: number | null
        }
        Update: {
          contractDurationMonths?: number | null
          createdAt?: string
          customerNotes?: string | null
          customModules?: string | null
          discountCents?: number | null
          id?: string
          leadId?: string
          maxActiveUsers?: number | null
          maxRouters?: number | null
          monthlyCostCents?: number
          quoteNumber?: string
          rejectionReason?: string | null
          setupFeeCents?: number | null
          smsAllocation?: number | null
          status?:
            | Database["public"]["Enums"]["enum_enterprise_quotes_status"]
            | null
          storageAllocationMB?: number | null
          taxPercentage?: number | null
          tenantId?: string | null
          termsAndConditions?: string | null
          updatedAt?: string
          validUntil?: string | null
          whatsappAllocation?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "enterprise_quotes_leadId_fkey"
            columns: ["leadId"]
            isOneToOne: false
            referencedRelation: "enterprise_leads"
            referencedColumns: ["id"]
          },
        ]
      }
      feature_flags: {
        Row: {
          createdAt: string
          description: string | null
          enabledAdmins: string | null
          enabledTenants: string | null
          id: string
          isEnabledGlobal: boolean | null
          isEnabledStaging: boolean | null
          key: string
          updatedAt: string
        }
        Insert: {
          createdAt: string
          description?: string | null
          enabledAdmins?: string | null
          enabledTenants?: string | null
          id: string
          isEnabledGlobal?: boolean | null
          isEnabledStaging?: boolean | null
          key: string
          updatedAt: string
        }
        Update: {
          createdAt?: string
          description?: string | null
          enabledAdmins?: string | null
          enabledTenants?: string | null
          id?: string
          isEnabledGlobal?: boolean | null
          isEnabledStaging?: boolean | null
          key?: string
          updatedAt?: string
        }
        Relationships: []
      }
      feature_violation_logs: {
        Row: {
          allowedLimit: number | null
          attemptedAction: string
          createdAt: string
          currentUsage: number | null
          featureOrLimitKey: string
          id: string
          requestIp: string | null
          subscriptionStatus: string
          tenantId: string
          updatedAt: string
          userAgent: string | null
        }
        Insert: {
          allowedLimit?: number | null
          attemptedAction: string
          createdAt: string
          currentUsage?: number | null
          featureOrLimitKey: string
          id: string
          requestIp?: string | null
          subscriptionStatus: string
          tenantId: string
          updatedAt: string
          userAgent?: string | null
        }
        Update: {
          allowedLimit?: number | null
          attemptedAction?: string
          createdAt?: string
          currentUsage?: number | null
          featureOrLimitKey?: string
          id?: string
          requestIp?: string | null
          subscriptionStatus?: string
          tenantId?: string
          updatedAt?: string
          userAgent?: string | null
        }
        Relationships: []
      }
      fraud_logs: {
        Row: {
          createdAt: string
          details: string | null
          id: number
          sessionId: string | null
          tenantId: string
          updatedAt: string
          violationType: string | null
        }
        Insert: {
          createdAt: string
          details?: string | null
          id?: number
          sessionId?: string | null
          tenantId: string
          updatedAt: string
          violationType?: string | null
        }
        Update: {
          createdAt?: string
          details?: string | null
          id?: number
          sessionId?: string | null
          tenantId?: string
          updatedAt?: string
          violationType?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fraud_logs_tenantId_fkey"
            columns: ["tenantId"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      invoices: {
        Row: {
          amount: number
          createdAt: string
          dueDate: string
          id: string
          status: Database["public"]["Enums"]["enum_invoices_status"] | null
          subscriberId: string
          tenantId: string
          updatedAt: string
        }
        Insert: {
          amount: number
          createdAt: string
          dueDate: string
          id: string
          status?: Database["public"]["Enums"]["enum_invoices_status"] | null
          subscriberId: string
          tenantId: string
          updatedAt: string
        }
        Update: {
          amount?: number
          createdAt?: string
          dueDate?: string
          id?: string
          status?: Database["public"]["Enums"]["enum_invoices_status"] | null
          subscriberId?: string
          tenantId?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "invoices_subscriberId_fkey"
            columns: ["subscriberId"]
            isOneToOne: false
            referencedRelation: "subscribers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "invoices_tenantId_fkey"
            columns: ["tenantId"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      marketing_coupons: {
        Row: {
          applicablePackageIds: string | null
          campaignId: string | null
          couponCode: string
          createdAt: string
          currentUses: number | null
          discountType:
            | Database["public"]["Enums"]["enum_marketing_coupons_discountType"]
            | null
          discountValue: number | null
          expirationDate: string | null
          id: string
          maxUses: number | null
          qrCodeUrl: string | null
          status:
            | Database["public"]["Enums"]["enum_marketing_coupons_status"]
            | null
          tenantId: string
          updatedAt: string
          validityDays: number | null
        }
        Insert: {
          applicablePackageIds?: string | null
          campaignId?: string | null
          couponCode: string
          createdAt: string
          currentUses?: number | null
          discountType?:
            | Database["public"]["Enums"]["enum_marketing_coupons_discountType"]
            | null
          discountValue?: number | null
          expirationDate?: string | null
          id: string
          maxUses?: number | null
          qrCodeUrl?: string | null
          status?:
            | Database["public"]["Enums"]["enum_marketing_coupons_status"]
            | null
          tenantId: string
          updatedAt: string
          validityDays?: number | null
        }
        Update: {
          applicablePackageIds?: string | null
          campaignId?: string | null
          couponCode?: string
          createdAt?: string
          currentUses?: number | null
          discountType?:
            | Database["public"]["Enums"]["enum_marketing_coupons_discountType"]
            | null
          discountValue?: number | null
          expirationDate?: string | null
          id?: string
          maxUses?: number | null
          qrCodeUrl?: string | null
          status?:
            | Database["public"]["Enums"]["enum_marketing_coupons_status"]
            | null
          tenantId?: string
          updatedAt?: string
          validityDays?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "marketing_coupons_campaignId_fkey"
            columns: ["campaignId"]
            isOneToOne: false
            referencedRelation: "ad_campaigns"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketing_coupons_tenantId_fkey"
            columns: ["tenantId"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      marketing_landing_pages: {
        Row: {
          bannerUrl: string | null
          bodyContent: string | null
          contactInfo: string | null
          countdownEndDate: string | null
          createdAt: string
          ctaButtonText: string | null
          ctaUrl: string | null
          headline: string | null
          id: string
          logoUrl: string | null
          mapEmbedUrl: string | null
          publishedAt: string | null
          slug: string
          status:
            | Database["public"]["Enums"]["enum_marketing_landing_pages_status"]
            | null
          tenantId: string
          testimonials: string | null
          title: string
          updatedAt: string
          videoUrl: string | null
        }
        Insert: {
          bannerUrl?: string | null
          bodyContent?: string | null
          contactInfo?: string | null
          countdownEndDate?: string | null
          createdAt: string
          ctaButtonText?: string | null
          ctaUrl?: string | null
          headline?: string | null
          id: string
          logoUrl?: string | null
          mapEmbedUrl?: string | null
          publishedAt?: string | null
          slug: string
          status?:
            | Database["public"]["Enums"]["enum_marketing_landing_pages_status"]
            | null
          tenantId: string
          testimonials?: string | null
          title: string
          updatedAt: string
          videoUrl?: string | null
        }
        Update: {
          bannerUrl?: string | null
          bodyContent?: string | null
          contactInfo?: string | null
          countdownEndDate?: string | null
          createdAt?: string
          ctaButtonText?: string | null
          ctaUrl?: string | null
          headline?: string | null
          id?: string
          logoUrl?: string | null
          mapEmbedUrl?: string | null
          publishedAt?: string | null
          slug?: string
          status?:
            | Database["public"]["Enums"]["enum_marketing_landing_pages_status"]
            | null
          tenantId?: string
          testimonials?: string | null
          title?: string
          updatedAt?: string
          videoUrl?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "marketing_landing_pages_tenantId_fkey"
            columns: ["tenantId"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      marketing_settings: {
        Row: {
          autoApproveAds: boolean | null
          createdAt: string
          defaultImpressionsLimit: number | null
          id: string
          maxUploadSizeBytes: number | null
          moduleEnabled: boolean | null
          supportedFormats: string | null
          tenantId: string
          updatedAt: string
        }
        Insert: {
          autoApproveAds?: boolean | null
          createdAt: string
          defaultImpressionsLimit?: number | null
          id: string
          maxUploadSizeBytes?: number | null
          moduleEnabled?: boolean | null
          supportedFormats?: string | null
          tenantId: string
          updatedAt: string
        }
        Update: {
          autoApproveAds?: boolean | null
          createdAt?: string
          defaultImpressionsLimit?: number | null
          id?: string
          maxUploadSizeBytes?: number | null
          moduleEnabled?: boolean | null
          supportedFormats?: string | null
          tenantId?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "marketing_settings_tenantId_fkey"
            columns: ["tenantId"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      media_items: {
        Row: {
          createdAt: string
          dimensions: string | null
          duration: number | null
          fileName: string
          fileSize: number | null
          fileType:
            | Database["public"]["Enums"]["enum_media_items_fileType"]
            | null
          fileUrl: string
          id: string
          metadata: string | null
          mimeType: string | null
          tenantId: string
          thumbnailUrl: string | null
          updatedAt: string
        }
        Insert: {
          createdAt: string
          dimensions?: string | null
          duration?: number | null
          fileName: string
          fileSize?: number | null
          fileType?:
            | Database["public"]["Enums"]["enum_media_items_fileType"]
            | null
          fileUrl: string
          id: string
          metadata?: string | null
          mimeType?: string | null
          tenantId: string
          thumbnailUrl?: string | null
          updatedAt: string
        }
        Update: {
          createdAt?: string
          dimensions?: string | null
          duration?: number | null
          fileName?: string
          fileSize?: number | null
          fileType?:
            | Database["public"]["Enums"]["enum_media_items_fileType"]
            | null
          fileUrl?: string
          id?: string
          metadata?: string | null
          mimeType?: string | null
          tenantId?: string
          thumbnailUrl?: string | null
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "media_items_tenantId_fkey"
            columns: ["tenantId"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      merchant_settings: {
        Row: {
          account_reference: string | null
          account_type: string
          callback_url: string | null
          created_at: string
          passkey: string | null
          shortcode: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          account_reference?: string | null
          account_type?: string
          callback_url?: string | null
          created_at?: string
          passkey?: string | null
          shortcode?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          account_reference?: string | null
          account_type?: string
          callback_url?: string | null
          created_at?: string
          passkey?: string | null
          shortcode?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      messages: {
        Row: {
          id: string
          read: boolean | null
          receiver_id: string | null
          sender_id: string | null
          text: string
          timestamp: number | null
        }
        Insert: {
          id?: string
          read?: boolean | null
          receiver_id?: string | null
          sender_id?: string | null
          text: string
          timestamp?: number | null
        }
        Update: {
          id?: string
          read?: boolean | null
          receiver_id?: string | null
          sender_id?: string | null
          text?: string
          timestamp?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "messages_receiver_id_fkey"
            columns: ["receiver_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_sender_id_fkey"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      messageTemplates: {
        Row: {
          channel: Database["public"]["Enums"]["enum_messageTemplates_channel"]
          content: string
          createdAt: string
          externalId: string | null
          id: string
          name: string
          status:
            | Database["public"]["Enums"]["enum_messageTemplates_status"]
            | null
          tenantId: string
          updatedAt: string
        }
        Insert: {
          channel: Database["public"]["Enums"]["enum_messageTemplates_channel"]
          content: string
          createdAt: string
          externalId?: string | null
          id: string
          name: string
          status?:
            | Database["public"]["Enums"]["enum_messageTemplates_status"]
            | null
          tenantId: string
          updatedAt: string
        }
        Update: {
          channel?: Database["public"]["Enums"]["enum_messageTemplates_channel"]
          content?: string
          createdAt?: string
          externalId?: string | null
          id?: string
          name?: string
          status?:
            | Database["public"]["Enums"]["enum_messageTemplates_status"]
            | null
          tenantId?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "messageTemplates_tenantId_fkey"
            columns: ["tenantId"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      movement_logs: {
        Row: {
          chassis_no: string
          driver_name: string
          expires_at: string | null
          id: string
          is_suspended: boolean | null
          issued_at: string | null
          issued_by: string
          plate_number: string
          returned_at: string | null
          route: string
        }
        Insert: {
          chassis_no: string
          driver_name: string
          expires_at?: string | null
          id?: string
          is_suspended?: boolean | null
          issued_at?: string | null
          issued_by: string
          plate_number: string
          returned_at?: string | null
          route: string
        }
        Update: {
          chassis_no?: string
          driver_name?: string
          expires_at?: string | null
          id?: string
          is_suspended?: boolean | null
          issued_at?: string | null
          issued_by?: string
          plate_number?: string
          returned_at?: string | null
          route?: string
        }
        Relationships: []
      }
      movements: {
        Row: {
          auth_by: string | null
          chassis: string | null
          created_at: string | null
          driver: string
          expiry: number
          id: string
          plate: string | null
          route: string | null
        }
        Insert: {
          auth_by?: string | null
          chassis?: string | null
          created_at?: string | null
          driver: string
          expiry: number
          id?: string
          plate?: string | null
          route?: string | null
        }
        Update: {
          auth_by?: string | null
          chassis?: string | null
          created_at?: string | null
          driver?: string
          expiry?: number
          id?: string
          plate?: string | null
          route?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "movements_plate_fkey"
            columns: ["plate"]
            isOneToOne: false
            referencedRelation: "plates"
            referencedColumns: ["number"]
          },
        ]
      }
      mpesa_callback_logs: {
        Row: {
          checkoutRequestId: string | null
          createdAt: string
          databaseUpdateStatus: string | null
          errorDetails: string | null
          id: string
          merchantRequestId: string | null
          rawPayload: string
          signatureVerified: boolean | null
          tenantId: string | null
          updatedAt: string
          validationErrors: string | null
          validationStatus: string | null
        }
        Insert: {
          checkoutRequestId?: string | null
          createdAt: string
          databaseUpdateStatus?: string | null
          errorDetails?: string | null
          id: string
          merchantRequestId?: string | null
          rawPayload: string
          signatureVerified?: boolean | null
          tenantId?: string | null
          updatedAt: string
          validationErrors?: string | null
          validationStatus?: string | null
        }
        Update: {
          checkoutRequestId?: string | null
          createdAt?: string
          databaseUpdateStatus?: string | null
          errorDetails?: string | null
          id?: string
          merchantRequestId?: string | null
          rawPayload?: string
          signatureVerified?: boolean | null
          tenantId?: string | null
          updatedAt?: string
          validationErrors?: string | null
          validationStatus?: string | null
        }
        Relationships: []
      }
      mpesa_payment_tokens: {
        Row: {
          authorizedAt: string | null
          consentIp: string | null
          consentUserAgent: string | null
          createdAt: string
          id: string
          lastUsedAt: string | null
          mandateType: string | null
          maxAuthorizedAmountKes: number | null
          metadata: string | null
          phoneNumber: string
          status:
            | Database["public"]["Enums"]["enum_mpesa_payment_tokens_status"]
            | null
          tenantId: string
          token: string
          updatedAt: string
        }
        Insert: {
          authorizedAt?: string | null
          consentIp?: string | null
          consentUserAgent?: string | null
          createdAt: string
          id: string
          lastUsedAt?: string | null
          mandateType?: string | null
          maxAuthorizedAmountKes?: number | null
          metadata?: string | null
          phoneNumber: string
          status?:
            | Database["public"]["Enums"]["enum_mpesa_payment_tokens_status"]
            | null
          tenantId: string
          token: string
          updatedAt: string
        }
        Update: {
          authorizedAt?: string | null
          consentIp?: string | null
          consentUserAgent?: string | null
          createdAt?: string
          id?: string
          lastUsedAt?: string | null
          mandateType?: string | null
          maxAuthorizedAmountKes?: number | null
          metadata?: string | null
          phoneNumber?: string
          status?:
            | Database["public"]["Enums"]["enum_mpesa_payment_tokens_status"]
            | null
          tenantId?: string
          token?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "mpesa_payment_tokens_tenantId_fkey"
            columns: ["tenantId"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      mpesa_transactions: {
        Row: {
          amount: number
          checkout_id: string
          client_ip: string | null
          id: string
          mac_address: string | null
          mpesa_receipt_code: string | null
          package_id: string
          package_name: string
          phone: string
          router_identity: string | null
          status: string | null
          timestamp: string | null
        }
        Insert: {
          amount: number
          checkout_id: string
          client_ip?: string | null
          id: string
          mac_address?: string | null
          mpesa_receipt_code?: string | null
          package_id: string
          package_name: string
          phone: string
          router_identity?: string | null
          status?: string | null
          timestamp?: string | null
        }
        Update: {
          amount?: number
          checkout_id?: string
          client_ip?: string | null
          id?: string
          mac_address?: string | null
          mpesa_receipt_code?: string | null
          package_id?: string
          package_name?: string
          phone?: string
          router_identity?: string | null
          status?: string | null
          timestamp?: string | null
        }
        Relationships: []
      }
      nas: {
        Row: {
          community: string | null
          createdAt: string
          description: string | null
          id: string
          nasname: string
          ports: number | null
          secret: string
          server: string | null
          shortname: string
          status: Database["public"]["Enums"]["enum_nas_status"] | null
          tenantId: string
          type: string | null
          updatedAt: string
        }
        Insert: {
          community?: string | null
          createdAt: string
          description?: string | null
          id: string
          nasname: string
          ports?: number | null
          secret: string
          server?: string | null
          shortname: string
          status?: Database["public"]["Enums"]["enum_nas_status"] | null
          tenantId: string
          type?: string | null
          updatedAt: string
        }
        Update: {
          community?: string | null
          createdAt?: string
          description?: string | null
          id?: string
          nasname?: string
          ports?: number | null
          secret?: string
          server?: string | null
          shortname?: string
          status?: Database["public"]["Enums"]["enum_nas_status"] | null
          tenantId?: string
          type?: string | null
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "nas_tenantId_fkey"
            columns: ["tenantId"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      packages: {
        Row: {
          burstdownload: string | null
          burstDownload: string | null
          burstthreshold: string | null
          burstThreshold: string | null
          bursttime: string | null
          burstTime: string | null
          burstupload: string | null
          burstUpload: string | null
          category: string | null
          createdAt: string
          dataLimitBytes: number | null
          description: string | null
          downloadspeed: string | null
          downloadSpeed: string | null
          durationMinutes: number | null
          expiryaction: string | null
          expiryAction:
            | Database["public"]["Enums"]["enum_packages_expiryAction"]
            | null
          id: number
          isEnabled: boolean | null
          isvisible: boolean | null
          isVisible: boolean | null
          limitattime: string | null
          limitAtTime: string | null
          mikrotikprofile: string | null
          mikrotikProfile: string | null
          name: string
          parentqueue: string | null
          parentQueue: string | null
          price: number
          priority: number | null
          sharedusers: number | null
          sharedUsers: number | null
          speedLimit: string | null
          tenantId: string
          type: Database["public"]["Enums"]["enum_packages_type"] | null
          updatedAt: string
          uploadspeed: string | null
          uploadSpeed: string | null
          validity: number | null
        }
        Insert: {
          burstdownload?: string | null
          burstDownload?: string | null
          burstthreshold?: string | null
          burstThreshold?: string | null
          bursttime?: string | null
          burstTime?: string | null
          burstupload?: string | null
          burstUpload?: string | null
          category?: string | null
          createdAt: string
          dataLimitBytes?: number | null
          description?: string | null
          downloadspeed?: string | null
          downloadSpeed?: string | null
          durationMinutes?: number | null
          expiryaction?: string | null
          expiryAction?:
            | Database["public"]["Enums"]["enum_packages_expiryAction"]
            | null
          id?: number
          isEnabled?: boolean | null
          isvisible?: boolean | null
          isVisible?: boolean | null
          limitattime?: string | null
          limitAtTime?: string | null
          mikrotikprofile?: string | null
          mikrotikProfile?: string | null
          name: string
          parentqueue?: string | null
          parentQueue?: string | null
          price: number
          priority?: number | null
          sharedusers?: number | null
          sharedUsers?: number | null
          speedLimit?: string | null
          tenantId: string
          type?: Database["public"]["Enums"]["enum_packages_type"] | null
          updatedAt: string
          uploadspeed?: string | null
          uploadSpeed?: string | null
          validity?: number | null
        }
        Update: {
          burstdownload?: string | null
          burstDownload?: string | null
          burstthreshold?: string | null
          burstThreshold?: string | null
          bursttime?: string | null
          burstTime?: string | null
          burstupload?: string | null
          burstUpload?: string | null
          category?: string | null
          createdAt?: string
          dataLimitBytes?: number | null
          description?: string | null
          downloadspeed?: string | null
          downloadSpeed?: string | null
          durationMinutes?: number | null
          expiryaction?: string | null
          expiryAction?:
            | Database["public"]["Enums"]["enum_packages_expiryAction"]
            | null
          id?: number
          isEnabled?: boolean | null
          isvisible?: boolean | null
          isVisible?: boolean | null
          limitattime?: string | null
          limitAtTime?: string | null
          mikrotikprofile?: string | null
          mikrotikProfile?: string | null
          name?: string
          parentqueue?: string | null
          parentQueue?: string | null
          price?: number
          priority?: number | null
          sharedusers?: number | null
          sharedUsers?: number | null
          speedLimit?: string | null
          tenantId?: string
          type?: Database["public"]["Enums"]["enum_packages_type"] | null
          updatedAt?: string
          uploadspeed?: string | null
          uploadSpeed?: string | null
          validity?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "packages_tenantId_fkey"
            columns: ["tenantId"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      passwordResetTokens: {
        Row: {
          attempts: number | null
          createdAt: string
          expiresAt: string
          id: string
          ipAddress: string | null
          isLocked: boolean | null
          otpCode: string | null
          resetType:
            | Database["public"]["Enums"]["enum_passwordResetTokens_resetType"]
            | null
          token: string
          tokenHash: string | null
          updatedAt: string
          used: boolean | null
          userAgent: string | null
          userId: string
        }
        Insert: {
          attempts?: number | null
          createdAt: string
          expiresAt: string
          id: string
          ipAddress?: string | null
          isLocked?: boolean | null
          otpCode?: string | null
          resetType?:
            | Database["public"]["Enums"]["enum_passwordResetTokens_resetType"]
            | null
          token: string
          tokenHash?: string | null
          updatedAt: string
          used?: boolean | null
          userAgent?: string | null
          userId: string
        }
        Update: {
          attempts?: number | null
          createdAt?: string
          expiresAt?: string
          id?: string
          ipAddress?: string | null
          isLocked?: boolean | null
          otpCode?: string | null
          resetType?:
            | Database["public"]["Enums"]["enum_passwordResetTokens_resetType"]
            | null
          token?: string
          tokenHash?: string | null
          updatedAt?: string
          used?: boolean | null
          userAgent?: string | null
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "passwordResetTokens_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "admin_users"
            referencedColumns: ["id"]
          },
        ]
      }
      payment: {
        Row: {
          aggregatorTransactionId: string | null
          amount: number
          checkoutRequestId: string | null
          completedAt: string | null
          createdAt: string
          destinationAccount: string | null
          destinationType: string | null
          failureReason: string | null
          id: string
          intasendCheckoutId: string | null
          intasendState: string | null
          intasendTrackingId: string | null
          ipAddress: string | null
          macAddress: string | null
          metadata: string | null
          mpesaReceiptNumber: string | null
          netAmount: number | null
          packageId: number
          payheroCheckoutId: string | null
          payheroReference: string | null
          payheroStatus: string | null
          paymentChannel: string | null
          paymentMethod: string | null
          phoneNumber: string
          platformFee: number | null
          processedCallbackHash: string | null
          rawAggregatorPayload: string | null
          rawCallback: string | null
          routerId: string | null
          sessionId: string | null
          status: Database["public"]["Enums"]["enum_payment_status"] | null
          subscriberId: string | null
          tenantId: string
          transactionFee: number | null
          updatedAt: string
          walletTransactionId: string | null
        }
        Insert: {
          aggregatorTransactionId?: string | null
          amount: number
          checkoutRequestId?: string | null
          completedAt?: string | null
          createdAt: string
          destinationAccount?: string | null
          destinationType?: string | null
          failureReason?: string | null
          id: string
          intasendCheckoutId?: string | null
          intasendState?: string | null
          intasendTrackingId?: string | null
          ipAddress?: string | null
          macAddress?: string | null
          metadata?: string | null
          mpesaReceiptNumber?: string | null
          netAmount?: number | null
          packageId: number
          payheroCheckoutId?: string | null
          payheroReference?: string | null
          payheroStatus?: string | null
          paymentChannel?: string | null
          paymentMethod?: string | null
          phoneNumber: string
          platformFee?: number | null
          processedCallbackHash?: string | null
          rawAggregatorPayload?: string | null
          rawCallback?: string | null
          routerId?: string | null
          sessionId?: string | null
          status?: Database["public"]["Enums"]["enum_payment_status"] | null
          subscriberId?: string | null
          tenantId: string
          transactionFee?: number | null
          updatedAt: string
          walletTransactionId?: string | null
        }
        Update: {
          aggregatorTransactionId?: string | null
          amount?: number
          checkoutRequestId?: string | null
          completedAt?: string | null
          createdAt?: string
          destinationAccount?: string | null
          destinationType?: string | null
          failureReason?: string | null
          id?: string
          intasendCheckoutId?: string | null
          intasendState?: string | null
          intasendTrackingId?: string | null
          ipAddress?: string | null
          macAddress?: string | null
          metadata?: string | null
          mpesaReceiptNumber?: string | null
          netAmount?: number | null
          packageId?: number
          payheroCheckoutId?: string | null
          payheroReference?: string | null
          payheroStatus?: string | null
          paymentChannel?: string | null
          paymentMethod?: string | null
          phoneNumber?: string
          platformFee?: number | null
          processedCallbackHash?: string | null
          rawAggregatorPayload?: string | null
          rawCallback?: string | null
          routerId?: string | null
          sessionId?: string | null
          status?: Database["public"]["Enums"]["enum_payment_status"] | null
          subscriberId?: string | null
          tenantId?: string
          transactionFee?: number | null
          updatedAt?: string
          walletTransactionId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payment_packageId_fkey"
            columns: ["packageId"]
            isOneToOne: false
            referencedRelation: "packages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payment_subscriberId_fkey"
            columns: ["subscriberId"]
            isOneToOne: false
            referencedRelation: "subscribers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payment_tenantId_fkey"
            columns: ["tenantId"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payment_walletTransactionId_fkey"
            columns: ["walletTransactionId"]
            isOneToOne: false
            referencedRelation: "walletTransactions"
            referencedColumns: ["id"]
          },
        ]
      }
      payment_logs: {
        Row: {
          amount: number | null
          checkoutRequestId: string | null
          createdAt: string
          errorDetails: string | null
          id: string
          merchantRequestId: string | null
          phoneNumber: string | null
          rawPayload: string | null
          safaricomResultCode: string | null
          safaricomResultDesc: string | null
          stage: string
          status: string
          tenantId: string | null
          transactionReference: string | null
          updatedAt: string
        }
        Insert: {
          amount?: number | null
          checkoutRequestId?: string | null
          createdAt: string
          errorDetails?: string | null
          id: string
          merchantRequestId?: string | null
          phoneNumber?: string | null
          rawPayload?: string | null
          safaricomResultCode?: string | null
          safaricomResultDesc?: string | null
          stage?: string
          status?: string
          tenantId?: string | null
          transactionReference?: string | null
          updatedAt: string
        }
        Update: {
          amount?: number | null
          checkoutRequestId?: string | null
          createdAt?: string
          errorDetails?: string | null
          id?: string
          merchantRequestId?: string | null
          phoneNumber?: string | null
          rawPayload?: string | null
          safaricomResultCode?: string | null
          safaricomResultDesc?: string | null
          stage?: string
          status?: string
          tenantId?: string | null
          transactionReference?: string | null
          updatedAt?: string
        }
        Relationships: []
      }
      payment_verification_audits: {
        Row: {
          checkoutRequestId: string | null
          createdAt: string
          details: string | null
          id: string
          invoiceId: string | null
          matchedReceipt: string | null
          status: string
          tenantId: string | null
          updatedAt: string
          verificationSource: string | null
        }
        Insert: {
          checkoutRequestId?: string | null
          createdAt: string
          details?: string | null
          id: string
          invoiceId?: string | null
          matchedReceipt?: string | null
          status?: string
          tenantId?: string | null
          updatedAt: string
          verificationSource?: string | null
        }
        Update: {
          checkoutRequestId?: string | null
          createdAt?: string
          details?: string | null
          id?: string
          invoiceId?: string | null
          matchedReceipt?: string | null
          status?: string
          tenantId?: string | null
          updatedAt?: string
          verificationSource?: string | null
        }
        Relationships: []
      }
      plates: {
        Row: {
          created_at: string | null
          id: string
          ntsa_status: string | null
          number: string
          reason: string | null
          status: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          ntsa_status?: string | null
          number: string
          reason?: string | null
          status?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          ntsa_status?: string | null
          number?: string
          reason?: string | null
          status?: string | null
        }
        Relationships: []
      }
      platform_brandings: {
        Row: {
          accentColor: string | null
          businessAddress: string | null
          buttonColor: string | null
          captivePortalLogoUrl: string | null
          chartColor: string | null
          companyName: string | null
          copyrightInfo: string | null
          createdAt: string
          dangerColor: string | null
          darkModeLogoUrl: string | null
          emailLogoUrl: string | null
          faviconUrl: string | null
          id: string
          invoiceLogoUrl: string | null
          legalInfo: string | null
          lightModeLogoUrl: string | null
          mobileLogoUrl: string | null
          navColor: string | null
          platformDescription: string | null
          platformName: string | null
          platformTagline: string | null
          primaryColor: string | null
          primaryLogoUrl: string | null
          secondaryColor: string | null
          sidebarColor: string | null
          socialLinks: string | null
          successColor: string | null
          supportEmail: string | null
          supportPhone: string | null
          updatedAt: string
          warningColor: string | null
          websiteUrl: string | null
        }
        Insert: {
          accentColor?: string | null
          businessAddress?: string | null
          buttonColor?: string | null
          captivePortalLogoUrl?: string | null
          chartColor?: string | null
          companyName?: string | null
          copyrightInfo?: string | null
          createdAt: string
          dangerColor?: string | null
          darkModeLogoUrl?: string | null
          emailLogoUrl?: string | null
          faviconUrl?: string | null
          id: string
          invoiceLogoUrl?: string | null
          legalInfo?: string | null
          lightModeLogoUrl?: string | null
          mobileLogoUrl?: string | null
          navColor?: string | null
          platformDescription?: string | null
          platformName?: string | null
          platformTagline?: string | null
          primaryColor?: string | null
          primaryLogoUrl?: string | null
          secondaryColor?: string | null
          sidebarColor?: string | null
          socialLinks?: string | null
          successColor?: string | null
          supportEmail?: string | null
          supportPhone?: string | null
          updatedAt: string
          warningColor?: string | null
          websiteUrl?: string | null
        }
        Update: {
          accentColor?: string | null
          businessAddress?: string | null
          buttonColor?: string | null
          captivePortalLogoUrl?: string | null
          chartColor?: string | null
          companyName?: string | null
          copyrightInfo?: string | null
          createdAt?: string
          dangerColor?: string | null
          darkModeLogoUrl?: string | null
          emailLogoUrl?: string | null
          faviconUrl?: string | null
          id?: string
          invoiceLogoUrl?: string | null
          legalInfo?: string | null
          lightModeLogoUrl?: string | null
          mobileLogoUrl?: string | null
          navColor?: string | null
          platformDescription?: string | null
          platformName?: string | null
          platformTagline?: string | null
          primaryColor?: string | null
          primaryLogoUrl?: string | null
          secondaryColor?: string | null
          sidebarColor?: string | null
          socialLinks?: string | null
          successColor?: string | null
          supportEmail?: string | null
          supportPhone?: string | null
          updatedAt?: string
          warningColor?: string | null
          websiteUrl?: string | null
        }
        Relationships: []
      }
      platform_credentials: {
        Row: {
          consumer_key: string | null
          consumer_secret: string | null
          created_at: string
          default_callback_url: string | null
          default_passkey: string | null
          default_shortcode: string | null
          environment: string
          github_branch: string | null
          github_last_commit_hash: string | null
          github_last_commit_msg: string | null
          github_last_pushed_at: string | null
          github_repo_url: string | null
          github_token: string | null
          id: boolean
          saas_paybill_account: string | null
          saas_shortcode_type: string | null
          saas_subscription_fee: number | null
          saas_till_number: string | null
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          consumer_key?: string | null
          consumer_secret?: string | null
          created_at?: string
          default_callback_url?: string | null
          default_passkey?: string | null
          default_shortcode?: string | null
          environment?: string
          github_branch?: string | null
          github_last_commit_hash?: string | null
          github_last_commit_msg?: string | null
          github_last_pushed_at?: string | null
          github_repo_url?: string | null
          github_token?: string | null
          id?: boolean
          saas_paybill_account?: string | null
          saas_shortcode_type?: string | null
          saas_subscription_fee?: number | null
          saas_till_number?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          consumer_key?: string | null
          consumer_secret?: string | null
          created_at?: string
          default_callback_url?: string | null
          default_passkey?: string | null
          default_shortcode?: string | null
          environment?: string
          github_branch?: string | null
          github_last_commit_hash?: string | null
          github_last_commit_msg?: string | null
          github_last_pushed_at?: string | null
          github_repo_url?: string | null
          github_token?: string | null
          id?: boolean
          saas_paybill_account?: string | null
          saas_shortcode_type?: string | null
          saas_subscription_fee?: number | null
          saas_till_number?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: []
      }
      platform_pricing_configs: {
        Row: {
          adBannerFeeCents: number | null
          adCampaignFeeCents: number | null
          adMonthlyFeeCents: number | null
          adStorageFeeCents: number | null
          adVideoFeeCents: number | null
          baseSubscriptionPriceCents: number | null
          createdAt: string
          emailPriceCents: number | null
          extraActiveUserPriceCents: number | null
          extraRouterPriceCents: number | null
          gracePeriodDays: number | null
          id: string
          includedActiveUsers: number | null
          latePaymentFeeCents: number | null
          smsPriceCents: number | null
          subscriptionTillNumber: string | null
          trialPeriodDays: number | null
          updatedAt: string
          vatPercentage: number | null
          whatsappPriceCents: number | null
        }
        Insert: {
          adBannerFeeCents?: number | null
          adCampaignFeeCents?: number | null
          adMonthlyFeeCents?: number | null
          adStorageFeeCents?: number | null
          adVideoFeeCents?: number | null
          baseSubscriptionPriceCents?: number | null
          createdAt: string
          emailPriceCents?: number | null
          extraActiveUserPriceCents?: number | null
          extraRouterPriceCents?: number | null
          gracePeriodDays?: number | null
          id: string
          includedActiveUsers?: number | null
          latePaymentFeeCents?: number | null
          smsPriceCents?: number | null
          subscriptionTillNumber?: string | null
          trialPeriodDays?: number | null
          updatedAt: string
          vatPercentage?: number | null
          whatsappPriceCents?: number | null
        }
        Update: {
          adBannerFeeCents?: number | null
          adCampaignFeeCents?: number | null
          adMonthlyFeeCents?: number | null
          adStorageFeeCents?: number | null
          adVideoFeeCents?: number | null
          baseSubscriptionPriceCents?: number | null
          createdAt?: string
          emailPriceCents?: number | null
          extraActiveUserPriceCents?: number | null
          extraRouterPriceCents?: number | null
          gracePeriodDays?: number | null
          id?: string
          includedActiveUsers?: number | null
          latePaymentFeeCents?: number | null
          smsPriceCents?: number | null
          subscriptionTillNumber?: string | null
          trialPeriodDays?: number | null
          updatedAt?: string
          vatPercentage?: number | null
          whatsappPriceCents?: number | null
        }
        Relationships: []
      }
      platform_transactions: {
        Row: {
          amount: number
          createdAt: string
          id: string
          metadata: string | null
          referenceId: string | null
          tenantId: string
          type: Database["public"]["Enums"]["enum_platform_transactions_type"]
          updatedAt: string
        }
        Insert: {
          amount: number
          createdAt: string
          id: string
          metadata?: string | null
          referenceId?: string | null
          tenantId: string
          type: Database["public"]["Enums"]["enum_platform_transactions_type"]
          updatedAt: string
        }
        Update: {
          amount?: number
          createdAt?: string
          id?: string
          metadata?: string | null
          referenceId?: string | null
          tenantId?: string
          type?: Database["public"]["Enums"]["enum_platform_transactions_type"]
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "platform_transactions_tenantId_fkey"
            columns: ["tenantId"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      platformFees: {
        Row: {
          createdAt: string
          description: string | null
          feeType: string
          feeValue: number
          id: string
          isActive: boolean | null
          isPercentage: boolean | null
          maxAmount: number | null
          minAmount: number | null
          updatedAt: string
        }
        Insert: {
          createdAt: string
          description?: string | null
          feeType: string
          feeValue: number
          id: string
          isActive?: boolean | null
          isPercentage?: boolean | null
          maxAmount?: number | null
          minAmount?: number | null
          updatedAt: string
        }
        Update: {
          createdAt?: string
          description?: string | null
          feeType?: string
          feeValue?: number
          id?: string
          isActive?: boolean | null
          isPercentage?: boolean | null
          maxAmount?: number | null
          minAmount?: number | null
          updatedAt?: string
        }
        Relationships: []
      }
      platformSettings: {
        Row: {
          createdAt: string
          key: string
          updatedAt: string
          value: string | null
        }
        Insert: {
          createdAt: string
          key: string
          updatedAt: string
          value?: string | null
        }
        Update: {
          createdAt?: string
          key?: string
          updatedAt?: string
          value?: string | null
        }
        Relationships: []
      }
      platformWallets: {
        Row: {
          balance: number | null
          createdAt: string
          currency: string | null
          id: string
          pendingBalance: number | null
          updatedAt: string
        }
        Insert: {
          balance?: number | null
          createdAt: string
          currency?: string | null
          id: string
          pendingBalance?: number | null
          updatedAt: string
        }
        Update: {
          balance?: number | null
          createdAt?: string
          currency?: string | null
          id?: string
          pendingBalance?: number | null
          updatedAt?: string
        }
        Relationships: []
      }
      portal_config: {
        Row: {
          accent_theme: string
          custom_welcome_msg: string | null
          id: string
          logo_icon: string | null
          logo_text: string | null
          logo_type: string
          primary_color: string
          subtitle: string
          support_phone: string
          title: string
          updated_at: string | null
        }
        Insert: {
          accent_theme: string
          custom_welcome_msg?: string | null
          id?: string
          logo_icon?: string | null
          logo_text?: string | null
          logo_type: string
          primary_color: string
          subtitle: string
          support_phone: string
          title: string
          updated_at?: string | null
        }
        Update: {
          accent_theme?: string
          custom_welcome_msg?: string | null
          id?: string
          logo_icon?: string | null
          logo_text?: string | null
          logo_type?: string
          primary_color?: string
          subtitle?: string
          support_phone?: string
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          business_name: string | null
          created_at: string
          email: string | null
          id: string
          updated_at: string
        }
        Insert: {
          business_name?: string | null
          created_at?: string
          email?: string | null
          id: string
          updated_at?: string
        }
        Update: {
          business_name?: string | null
          created_at?: string
          email?: string | null
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      qr_campaigns: {
        Row: {
          createdAt: string
          destinationType:
            | Database["public"]["Enums"]["enum_qr_campaigns_destinationType"]
            | null
          id: string
          qrCodeUrl: string
          scansCount: number | null
          targetUrl: string
          tenantId: string
          title: string
          updatedAt: string
        }
        Insert: {
          createdAt: string
          destinationType?:
            | Database["public"]["Enums"]["enum_qr_campaigns_destinationType"]
            | null
          id: string
          qrCodeUrl: string
          scansCount?: number | null
          targetUrl: string
          tenantId: string
          title: string
          updatedAt: string
        }
        Update: {
          createdAt?: string
          destinationType?:
            | Database["public"]["Enums"]["enum_qr_campaigns_destinationType"]
            | null
          id?: string
          qrCodeUrl?: string
          scansCount?: number | null
          targetUrl?: string
          tenantId?: string
          title?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "qr_campaigns_tenantId_fkey"
            columns: ["tenantId"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      radacct: {
        Row: {
          acctauthentic: string | null
          acctinputoctets: number | null
          acctinterval: number | null
          acctoutputoctets: number | null
          acctsessionid: string
          acctsessiontime: number | null
          acctstarttime: string | null
          acctstoptime: string | null
          acctterminatecause: string | null
          acctuniqueid: string
          acctupdatetime: string | null
          calledstationid: string | null
          callingstationid: string | null
          connectinfo_start: string | null
          connectinfo_stop: string | null
          framedipaddress: string | null
          framedprotocol: string | null
          groupname: string | null
          nasipaddress: string
          nasportid: string | null
          nasporttype: string | null
          radacctid: number
          realm: string | null
          servicetype: string | null
          tenantId: string
          username: string
        }
        Insert: {
          acctauthentic?: string | null
          acctinputoctets?: number | null
          acctinterval?: number | null
          acctoutputoctets?: number | null
          acctsessionid: string
          acctsessiontime?: number | null
          acctstarttime?: string | null
          acctstoptime?: string | null
          acctterminatecause?: string | null
          acctuniqueid: string
          acctupdatetime?: string | null
          calledstationid?: string | null
          callingstationid?: string | null
          connectinfo_start?: string | null
          connectinfo_stop?: string | null
          framedipaddress?: string | null
          framedprotocol?: string | null
          groupname?: string | null
          nasipaddress: string
          nasportid?: string | null
          nasporttype?: string | null
          radacctid?: number
          realm?: string | null
          servicetype?: string | null
          tenantId: string
          username: string
        }
        Update: {
          acctauthentic?: string | null
          acctinputoctets?: number | null
          acctinterval?: number | null
          acctoutputoctets?: number | null
          acctsessionid?: string
          acctsessiontime?: number | null
          acctstarttime?: string | null
          acctstoptime?: string | null
          acctterminatecause?: string | null
          acctuniqueid?: string
          acctupdatetime?: string | null
          calledstationid?: string | null
          callingstationid?: string | null
          connectinfo_start?: string | null
          connectinfo_stop?: string | null
          framedipaddress?: string | null
          framedprotocol?: string | null
          groupname?: string | null
          nasipaddress?: string
          nasportid?: string | null
          nasporttype?: string | null
          radacctid?: number
          realm?: string | null
          servicetype?: string | null
          tenantId?: string
          username?: string
        }
        Relationships: []
      }
      radcheck: {
        Row: {
          attribute: string
          id: number
          op: string | null
          tenantId: string
          username: string
          value: string
        }
        Insert: {
          attribute: string
          id?: number
          op?: string | null
          tenantId: string
          username: string
          value: string
        }
        Update: {
          attribute?: string
          id?: number
          op?: string | null
          tenantId?: string
          username?: string
          value?: string
        }
        Relationships: []
      }
      radgroupcheck: {
        Row: {
          attribute: string
          groupname: string
          id: number
          op: string | null
          tenantId: string
          value: string
        }
        Insert: {
          attribute: string
          groupname: string
          id?: number
          op?: string | null
          tenantId: string
          value: string
        }
        Update: {
          attribute?: string
          groupname?: string
          id?: number
          op?: string | null
          tenantId?: string
          value?: string
        }
        Relationships: []
      }
      radgroupreply: {
        Row: {
          attribute: string
          groupname: string
          id: number
          op: string | null
          tenantId: string
          value: string
        }
        Insert: {
          attribute: string
          groupname: string
          id?: number
          op?: string | null
          tenantId: string
          value: string
        }
        Update: {
          attribute?: string
          groupname?: string
          id?: number
          op?: string | null
          tenantId?: string
          value?: string
        }
        Relationships: []
      }
      radius_policies: {
        Row: {
          authType:
            | Database["public"]["Enums"]["enum_radius_policies_authType"]
            | null
          createdAt: string
          fallbackAction:
            | Database["public"]["Enums"]["enum_radius_policies_fallbackAction"]
            | null
          id: string
          idleTimeout: number | null
          macAuthEnabled: boolean | null
          name: string
          rateLimit: string | null
          sessionTimeout: number | null
          simultaneousUse: number | null
          tenantId: string
          updatedAt: string
          voucherAuthEnabled: boolean | null
        }
        Insert: {
          authType?:
            | Database["public"]["Enums"]["enum_radius_policies_authType"]
            | null
          createdAt: string
          fallbackAction?:
            | Database["public"]["Enums"]["enum_radius_policies_fallbackAction"]
            | null
          id: string
          idleTimeout?: number | null
          macAuthEnabled?: boolean | null
          name: string
          rateLimit?: string | null
          sessionTimeout?: number | null
          simultaneousUse?: number | null
          tenantId: string
          updatedAt: string
          voucherAuthEnabled?: boolean | null
        }
        Update: {
          authType?:
            | Database["public"]["Enums"]["enum_radius_policies_authType"]
            | null
          createdAt?: string
          fallbackAction?:
            | Database["public"]["Enums"]["enum_radius_policies_fallbackAction"]
            | null
          id?: string
          idleTimeout?: number | null
          macAuthEnabled?: boolean | null
          name?: string
          rateLimit?: string | null
          sessionTimeout?: number | null
          simultaneousUse?: number | null
          tenantId?: string
          updatedAt?: string
          voucherAuthEnabled?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "radius_policies_tenantId_fkey"
            columns: ["tenantId"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      radpostauth: {
        Row: {
          authdate: string | null
          id: number
          nasipaddress: string | null
          pass: string | null
          reason: string | null
          reply: string
          tenantId: string | null
          username: string
        }
        Insert: {
          authdate?: string | null
          id?: number
          nasipaddress?: string | null
          pass?: string | null
          reason?: string | null
          reply: string
          tenantId?: string | null
          username: string
        }
        Update: {
          authdate?: string | null
          id?: number
          nasipaddress?: string | null
          pass?: string | null
          reason?: string | null
          reply?: string
          tenantId?: string | null
          username?: string
        }
        Relationships: []
      }
      radreply: {
        Row: {
          attribute: string
          id: number
          op: string | null
          tenantId: string
          username: string
          value: string
        }
        Insert: {
          attribute: string
          id?: number
          op?: string | null
          tenantId: string
          username: string
          value: string
        }
        Update: {
          attribute?: string
          id?: number
          op?: string | null
          tenantId?: string
          username?: string
          value?: string
        }
        Relationships: []
      }
      radusergroup: {
        Row: {
          groupname: string
          id: number
          priority: number | null
          tenantId: string
          username: string
        }
        Insert: {
          groupname: string
          id?: number
          priority?: number | null
          tenantId: string
          username: string
        }
        Update: {
          groupname?: string
          id?: number
          priority?: number | null
          tenantId?: string
          username?: string
        }
        Relationships: []
      }
      refund_audit_logs: {
        Row: {
          action: string
          amount: number | null
          createdAt: string
          id: string
          ipAddress: string | null
          newBalance: number | null
          performedBy: string
          previousBalance: number | null
          reason: string | null
          refundRequestId: string
          subscriberId: string
          tenantId: string
          type: string
          updatedAt: string
          userAgent: string | null
        }
        Insert: {
          action: string
          amount?: number | null
          createdAt: string
          id: string
          ipAddress?: string | null
          newBalance?: number | null
          performedBy: string
          previousBalance?: number | null
          reason?: string | null
          refundRequestId: string
          subscriberId: string
          tenantId: string
          type: string
          updatedAt: string
          userAgent?: string | null
        }
        Update: {
          action?: string
          amount?: number | null
          createdAt?: string
          id?: string
          ipAddress?: string | null
          newBalance?: number | null
          performedBy?: string
          previousBalance?: number | null
          reason?: string | null
          refundRequestId?: string
          subscriberId?: string
          tenantId?: string
          type?: string
          updatedAt?: string
          userAgent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "refund_audit_logs_tenantId_fkey"
            columns: ["tenantId"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      refund_requests: {
        Row: {
          amount: number | null
          approvedBy: string | null
          category:
            | Database["public"]["Enums"]["enum_refund_requests_category"]
            | null
          completedAt: string | null
          createdAt: string
          evidenceUrl: string | null
          extensionMinutes: number | null
          freeDataBytes: number | null
          id: string
          idempotencyKey: string
          newBalance: number | null
          notes: string | null
          packageId: number | null
          paymentId: string | null
          previousBalance: number | null
          providerRefundId: string | null
          providerRefundStatus:
            | Database["public"]["Enums"]["enum_refund_requests_providerRefundStatus"]
            | null
          reason: string
          rejectedBy: string | null
          rejectionReason: string | null
          requestedBy: string
          status:
            | Database["public"]["Enums"]["enum_refund_requests_status"]
            | null
          subscriberId: string
          tenantId: string
          type: Database["public"]["Enums"]["enum_refund_requests_type"]
          updatedAt: string
        }
        Insert: {
          amount?: number | null
          approvedBy?: string | null
          category?:
            | Database["public"]["Enums"]["enum_refund_requests_category"]
            | null
          completedAt?: string | null
          createdAt: string
          evidenceUrl?: string | null
          extensionMinutes?: number | null
          freeDataBytes?: number | null
          id: string
          idempotencyKey: string
          newBalance?: number | null
          notes?: string | null
          packageId?: number | null
          paymentId?: string | null
          previousBalance?: number | null
          providerRefundId?: string | null
          providerRefundStatus?:
            | Database["public"]["Enums"]["enum_refund_requests_providerRefundStatus"]
            | null
          reason: string
          rejectedBy?: string | null
          rejectionReason?: string | null
          requestedBy: string
          status?:
            | Database["public"]["Enums"]["enum_refund_requests_status"]
            | null
          subscriberId: string
          tenantId: string
          type: Database["public"]["Enums"]["enum_refund_requests_type"]
          updatedAt: string
        }
        Update: {
          amount?: number | null
          approvedBy?: string | null
          category?:
            | Database["public"]["Enums"]["enum_refund_requests_category"]
            | null
          completedAt?: string | null
          createdAt?: string
          evidenceUrl?: string | null
          extensionMinutes?: number | null
          freeDataBytes?: number | null
          id?: string
          idempotencyKey?: string
          newBalance?: number | null
          notes?: string | null
          packageId?: number | null
          paymentId?: string | null
          previousBalance?: number | null
          providerRefundId?: string | null
          providerRefundStatus?:
            | Database["public"]["Enums"]["enum_refund_requests_providerRefundStatus"]
            | null
          reason?: string
          rejectedBy?: string | null
          rejectionReason?: string | null
          requestedBy?: string
          status?:
            | Database["public"]["Enums"]["enum_refund_requests_status"]
            | null
          subscriberId?: string
          tenantId?: string
          type?: Database["public"]["Enums"]["enum_refund_requests_type"]
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "refund_requests_paymentId_fkey"
            columns: ["paymentId"]
            isOneToOne: false
            referencedRelation: "payment"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "refund_requests_subscriberId_fkey"
            columns: ["subscriberId"]
            isOneToOne: false
            referencedRelation: "subscribers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "refund_requests_tenantId_fkey"
            columns: ["tenantId"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      router_connection_logs: {
        Row: {
          action: Database["public"]["Enums"]["enum_router_connection_logs_action"]
          createdAt: string
          details: string | null
          errorMessage: string | null
          id: string
          ipAddress: string | null
          metadata: string | null
          routerId: string
          status:
            | Database["public"]["Enums"]["enum_router_connection_logs_status"]
            | null
          tenantId: string
          updatedAt: string
          userId: string | null
        }
        Insert: {
          action: Database["public"]["Enums"]["enum_router_connection_logs_action"]
          createdAt: string
          details?: string | null
          errorMessage?: string | null
          id: string
          ipAddress?: string | null
          metadata?: string | null
          routerId: string
          status?:
            | Database["public"]["Enums"]["enum_router_connection_logs_status"]
            | null
          tenantId: string
          updatedAt: string
          userId?: string | null
        }
        Update: {
          action?: Database["public"]["Enums"]["enum_router_connection_logs_action"]
          createdAt?: string
          details?: string | null
          errorMessage?: string | null
          id?: string
          ipAddress?: string | null
          metadata?: string | null
          routerId?: string
          status?:
            | Database["public"]["Enums"]["enum_router_connection_logs_status"]
            | null
          tenantId?: string
          updatedAt?: string
          userId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "router_connection_logs_routerId_fkey"
            columns: ["routerId"]
            isOneToOne: false
            referencedRelation: "routers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "router_connection_logs_tenantId_fkey"
            columns: ["tenantId"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "router_connection_logs_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "admin_users"
            referencedColumns: ["id"]
          },
        ]
      }
      router_incidents: {
        Row: {
          affectedSubscriberCount: number | null
          compensationIssuedCents: number | null
          createdAt: string
          details: string | null
          endTime: string | null
          expectedReturnTime: string | null
          id: string
          incidentType: Database["public"]["Enums"]["enum_router_incidents_incidentType"]
          notifiedChannels: string | null
          resolvedBy: string | null
          routerId: string
          severity:
            | Database["public"]["Enums"]["enum_router_incidents_severity"]
            | null
          startTime: string | null
          status:
            | Database["public"]["Enums"]["enum_router_incidents_status"]
            | null
          summary: string
          tenantId: string
          updatedAt: string
        }
        Insert: {
          affectedSubscriberCount?: number | null
          compensationIssuedCents?: number | null
          createdAt: string
          details?: string | null
          endTime?: string | null
          expectedReturnTime?: string | null
          id: string
          incidentType: Database["public"]["Enums"]["enum_router_incidents_incidentType"]
          notifiedChannels?: string | null
          resolvedBy?: string | null
          routerId: string
          severity?:
            | Database["public"]["Enums"]["enum_router_incidents_severity"]
            | null
          startTime?: string | null
          status?:
            | Database["public"]["Enums"]["enum_router_incidents_status"]
            | null
          summary: string
          tenantId: string
          updatedAt: string
        }
        Update: {
          affectedSubscriberCount?: number | null
          compensationIssuedCents?: number | null
          createdAt?: string
          details?: string | null
          endTime?: string | null
          expectedReturnTime?: string | null
          id?: string
          incidentType?: Database["public"]["Enums"]["enum_router_incidents_incidentType"]
          notifiedChannels?: string | null
          resolvedBy?: string | null
          routerId?: string
          severity?:
            | Database["public"]["Enums"]["enum_router_incidents_severity"]
            | null
          startTime?: string | null
          status?:
            | Database["public"]["Enums"]["enum_router_incidents_status"]
            | null
          summary?: string
          tenantId?: string
          updatedAt?: string
        }
        Relationships: []
      }
      routers: {
        Row: {
          apiPassword: string | null
          apiUser: string | null
          architecture: string | null
          autoConfigError: string | null
          autoConfigScript: string | null
          autoConfigStatus:
            | Database["public"]["Enums"]["enum_routers_autoConfigStatus"]
            | null
          autoExtendSubscribersOnOutage: boolean | null
          bandwidthUsageMbps: number | null
          capabilities: string | null
          cpuUsagePercent: number | null
          createdAt: string
          escalationThresholdMinutes: number | null
          expectedReturnTime: string | null
          hasSmartPower: boolean | null
          host: string
          id: string
          identity: string | null
          isOnline: boolean | null
          lastSeen: string | null
          location: string | null
          maintenanceCreatedBy: string | null
          maintenanceNotes: string | null
          maintenanceStartTime: string | null
          maintenanceStatus:
            | Database["public"]["Enums"]["enum_routers_maintenanceStatus"]
            | null
          memoryUsagePercent: number | null
          model: string | null
          name: string
          onboardtoken: string | null
          onboardToken: string | null
          outageAutoDetect: boolean | null
          outageThresholdMinutes: number | null
          password: string
          port: number | null
          powerStatus:
            | Database["public"]["Enums"]["enum_routers_powerStatus"]
            | null
          smartPowerHost: string | null
          smartPowerOutletId: string | null
          smartPowerPort: number | null
          smartPowerType:
            | Database["public"]["Enums"]["enum_routers_smartPowerType"]
            | null
          subscriberCount: number | null
          suspendAlertsInBlackout: boolean | null
          tenantId: string
          updatedAt: string
          uptimeSeconds: number | null
          username: string
          validationStatus:
            | Database["public"]["Enums"]["enum_routers_validationStatus"]
            | null
          version: string | null
        }
        Insert: {
          apiPassword?: string | null
          apiUser?: string | null
          architecture?: string | null
          autoConfigError?: string | null
          autoConfigScript?: string | null
          autoConfigStatus?:
            | Database["public"]["Enums"]["enum_routers_autoConfigStatus"]
            | null
          autoExtendSubscribersOnOutage?: boolean | null
          bandwidthUsageMbps?: number | null
          capabilities?: string | null
          cpuUsagePercent?: number | null
          createdAt: string
          escalationThresholdMinutes?: number | null
          expectedReturnTime?: string | null
          hasSmartPower?: boolean | null
          host: string
          id: string
          identity?: string | null
          isOnline?: boolean | null
          lastSeen?: string | null
          location?: string | null
          maintenanceCreatedBy?: string | null
          maintenanceNotes?: string | null
          maintenanceStartTime?: string | null
          maintenanceStatus?:
            | Database["public"]["Enums"]["enum_routers_maintenanceStatus"]
            | null
          memoryUsagePercent?: number | null
          model?: string | null
          name: string
          onboardtoken?: string | null
          onboardToken?: string | null
          outageAutoDetect?: boolean | null
          outageThresholdMinutes?: number | null
          password: string
          port?: number | null
          powerStatus?:
            | Database["public"]["Enums"]["enum_routers_powerStatus"]
            | null
          smartPowerHost?: string | null
          smartPowerOutletId?: string | null
          smartPowerPort?: number | null
          smartPowerType?:
            | Database["public"]["Enums"]["enum_routers_smartPowerType"]
            | null
          subscriberCount?: number | null
          suspendAlertsInBlackout?: boolean | null
          tenantId: string
          updatedAt: string
          uptimeSeconds?: number | null
          username: string
          validationStatus?:
            | Database["public"]["Enums"]["enum_routers_validationStatus"]
            | null
          version?: string | null
        }
        Update: {
          apiPassword?: string | null
          apiUser?: string | null
          architecture?: string | null
          autoConfigError?: string | null
          autoConfigScript?: string | null
          autoConfigStatus?:
            | Database["public"]["Enums"]["enum_routers_autoConfigStatus"]
            | null
          autoExtendSubscribersOnOutage?: boolean | null
          bandwidthUsageMbps?: number | null
          capabilities?: string | null
          cpuUsagePercent?: number | null
          createdAt?: string
          escalationThresholdMinutes?: number | null
          expectedReturnTime?: string | null
          hasSmartPower?: boolean | null
          host?: string
          id?: string
          identity?: string | null
          isOnline?: boolean | null
          lastSeen?: string | null
          location?: string | null
          maintenanceCreatedBy?: string | null
          maintenanceNotes?: string | null
          maintenanceStartTime?: string | null
          maintenanceStatus?:
            | Database["public"]["Enums"]["enum_routers_maintenanceStatus"]
            | null
          memoryUsagePercent?: number | null
          model?: string | null
          name?: string
          onboardtoken?: string | null
          onboardToken?: string | null
          outageAutoDetect?: boolean | null
          outageThresholdMinutes?: number | null
          password?: string
          port?: number | null
          powerStatus?:
            | Database["public"]["Enums"]["enum_routers_powerStatus"]
            | null
          smartPowerHost?: string | null
          smartPowerOutletId?: string | null
          smartPowerPort?: number | null
          smartPowerType?:
            | Database["public"]["Enums"]["enum_routers_smartPowerType"]
            | null
          subscriberCount?: number | null
          suspendAlertsInBlackout?: boolean | null
          tenantId?: string
          updatedAt?: string
          uptimeSeconds?: number | null
          username?: string
          validationStatus?:
            | Database["public"]["Enums"]["enum_routers_validationStatus"]
            | null
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "routers_tenantId_fkey"
            columns: ["tenantId"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      saas_invoice_items: {
        Row: {
          category: Database["public"]["Enums"]["enum_saas_invoice_items_category"]
          createdAt: string
          description: string
          id: string
          invoiceId: string
          quantity: number | null
          totalPriceCents: number | null
          unitPriceCents: number | null
          updatedAt: string
        }
        Insert: {
          category: Database["public"]["Enums"]["enum_saas_invoice_items_category"]
          createdAt: string
          description: string
          id: string
          invoiceId: string
          quantity?: number | null
          totalPriceCents?: number | null
          unitPriceCents?: number | null
          updatedAt: string
        }
        Update: {
          category?: Database["public"]["Enums"]["enum_saas_invoice_items_category"]
          createdAt?: string
          description?: string
          id?: string
          invoiceId?: string
          quantity?: number | null
          totalPriceCents?: number | null
          unitPriceCents?: number | null
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "saas_invoice_items_invoiceId_fkey"
            columns: ["invoiceId"]
            isOneToOne: false
            referencedRelation: "saas_invoices"
            referencedColumns: ["id"]
          },
        ]
      }
      saas_invoices: {
        Row: {
          adAmountCents: number | null
          addonAmountCents: number | null
          billingPeriodEnd: string
          billingPeriodStart: string
          createdAt: string
          discountAmountCents: number | null
          dueDate: string
          emailAmountCents: number | null
          extraRoutersAmountCents: number | null
          id: string
          intasendCheckoutUrl: string | null
          invoiceNumber: string
          invoicePdfUrl: string | null
          lateFeeCents: number | null
          metadata: string | null
          paidAt: string | null
          paymentMethod: string | null
          paymentReference: string | null
          paymentStatus:
            | Database["public"]["Enums"]["enum_saas_invoices_paymentStatus"]
            | null
          smsAmountCents: number | null
          subscriptionAmountCents: number | null
          subtotalcents: number | null
          subtotalCents: number | null
          taxAmountCents: number | null
          taxcents: number | null
          taxCents: number | null
          tenantId: string
          totalAmountCents: number | null
          updatedAt: string
          usageAmountCents: number | null
          whatsappAmountCents: number | null
        }
        Insert: {
          adAmountCents?: number | null
          addonAmountCents?: number | null
          billingPeriodEnd: string
          billingPeriodStart: string
          createdAt: string
          discountAmountCents?: number | null
          dueDate: string
          emailAmountCents?: number | null
          extraRoutersAmountCents?: number | null
          id: string
          intasendCheckoutUrl?: string | null
          invoiceNumber: string
          invoicePdfUrl?: string | null
          lateFeeCents?: number | null
          metadata?: string | null
          paidAt?: string | null
          paymentMethod?: string | null
          paymentReference?: string | null
          paymentStatus?:
            | Database["public"]["Enums"]["enum_saas_invoices_paymentStatus"]
            | null
          smsAmountCents?: number | null
          subscriptionAmountCents?: number | null
          subtotalcents?: number | null
          subtotalCents?: number | null
          taxAmountCents?: number | null
          taxcents?: number | null
          taxCents?: number | null
          tenantId: string
          totalAmountCents?: number | null
          updatedAt: string
          usageAmountCents?: number | null
          whatsappAmountCents?: number | null
        }
        Update: {
          adAmountCents?: number | null
          addonAmountCents?: number | null
          billingPeriodEnd?: string
          billingPeriodStart?: string
          createdAt?: string
          discountAmountCents?: number | null
          dueDate?: string
          emailAmountCents?: number | null
          extraRoutersAmountCents?: number | null
          id?: string
          intasendCheckoutUrl?: string | null
          invoiceNumber?: string
          invoicePdfUrl?: string | null
          lateFeeCents?: number | null
          metadata?: string | null
          paidAt?: string | null
          paymentMethod?: string | null
          paymentReference?: string | null
          paymentStatus?:
            | Database["public"]["Enums"]["enum_saas_invoices_paymentStatus"]
            | null
          smsAmountCents?: number | null
          subscriptionAmountCents?: number | null
          subtotalcents?: number | null
          subtotalCents?: number | null
          taxAmountCents?: number | null
          taxcents?: number | null
          taxCents?: number | null
          tenantId?: string
          totalAmountCents?: number | null
          updatedAt?: string
          usageAmountCents?: number | null
          whatsappAmountCents?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "saas_invoices_tenantId_fkey"
            columns: ["tenantId"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      saas_notifications: {
        Row: {
          createdAt: string
          id: string
          message: string
          read: boolean | null
          tenantId: string
          title: string
          type: Database["public"]["Enums"]["enum_saas_notifications_type"]
          updatedAt: string
        }
        Insert: {
          createdAt: string
          id: string
          message: string
          read?: boolean | null
          tenantId: string
          title: string
          type: Database["public"]["Enums"]["enum_saas_notifications_type"]
          updatedAt: string
        }
        Update: {
          createdAt?: string
          id?: string
          message?: string
          read?: boolean | null
          tenantId?: string
          title?: string
          type?: Database["public"]["Enums"]["enum_saas_notifications_type"]
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "saas_notifications_tenantId_fkey"
            columns: ["tenantId"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      saas_payments: {
        Row: {
          amountCents: number | null
          createdAt: string
          gateway:
            | Database["public"]["Enums"]["enum_saas_payments_gateway"]
            | null
          id: string
          invoiceId: string
          rawPayload: string | null
          status:
            | Database["public"]["Enums"]["enum_saas_payments_status"]
            | null
          tenantId: string
          transactionReference: string
          updatedAt: string
        }
        Insert: {
          amountCents?: number | null
          createdAt: string
          gateway?:
            | Database["public"]["Enums"]["enum_saas_payments_gateway"]
            | null
          id: string
          invoiceId: string
          rawPayload?: string | null
          status?:
            | Database["public"]["Enums"]["enum_saas_payments_status"]
            | null
          tenantId: string
          transactionReference: string
          updatedAt: string
        }
        Update: {
          amountCents?: number | null
          createdAt?: string
          gateway?:
            | Database["public"]["Enums"]["enum_saas_payments_gateway"]
            | null
          id?: string
          invoiceId?: string
          rawPayload?: string | null
          status?:
            | Database["public"]["Enums"]["enum_saas_payments_status"]
            | null
          tenantId?: string
          transactionReference?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "saas_payments_tenantId_fkey"
            columns: ["tenantId"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      saas_subscription_payments: {
        Row: {
          amount: number
          checkoutRequestId: string | null
          completedAt: string | null
          createdAt: string
          currency: string | null
          id: string
          invoiceId: string | null
          merchantRequestId: string | null
          mpesaReceiptNumber: string | null
          phoneNumber: string
          rawCallback: string | null
          status:
            | Database["public"]["Enums"]["enum_saas_subscription_payments_status"]
            | null
          tenantId: string
          updatedAt: string
        }
        Insert: {
          amount: number
          checkoutRequestId?: string | null
          completedAt?: string | null
          createdAt: string
          currency?: string | null
          id: string
          invoiceId?: string | null
          merchantRequestId?: string | null
          mpesaReceiptNumber?: string | null
          phoneNumber: string
          rawCallback?: string | null
          status?:
            | Database["public"]["Enums"]["enum_saas_subscription_payments_status"]
            | null
          tenantId: string
          updatedAt: string
        }
        Update: {
          amount?: number
          checkoutRequestId?: string | null
          completedAt?: string | null
          createdAt?: string
          currency?: string | null
          id?: string
          invoiceId?: string | null
          merchantRequestId?: string | null
          mpesaReceiptNumber?: string | null
          phoneNumber?: string
          rawCallback?: string | null
          status?:
            | Database["public"]["Enums"]["enum_saas_subscription_payments_status"]
            | null
          tenantId?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "saas_subscription_payments_tenantId_fkey"
            columns: ["tenantId"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      sandbox_message_logs: {
        Row: {
          channel: Database["public"]["Enums"]["enum_sandbox_message_logs_channel"]
          content: string
          cost: number | null
          createdAt: string
          gateway: string | null
          id: string
          metadata: string | null
          recipient: string
          status:
            | Database["public"]["Enums"]["enum_sandbox_message_logs_status"]
            | null
          subject: string | null
          tenantId: string | null
          updatedAt: string
        }
        Insert: {
          channel: Database["public"]["Enums"]["enum_sandbox_message_logs_channel"]
          content: string
          cost?: number | null
          createdAt: string
          gateway?: string | null
          id: string
          metadata?: string | null
          recipient: string
          status?:
            | Database["public"]["Enums"]["enum_sandbox_message_logs_status"]
            | null
          subject?: string | null
          tenantId?: string | null
          updatedAt: string
        }
        Update: {
          channel?: Database["public"]["Enums"]["enum_sandbox_message_logs_channel"]
          content?: string
          cost?: number | null
          createdAt?: string
          gateway?: string | null
          id?: string
          metadata?: string | null
          recipient?: string
          status?:
            | Database["public"]["Enums"]["enum_sandbox_message_logs_status"]
            | null
          subject?: string | null
          tenantId?: string | null
          updatedAt?: string
        }
        Relationships: []
      }
      sandbox_payment_logs: {
        Row: {
          amount: number
          createdAt: string
          failureReason: string | null
          id: string
          metadata: string | null
          phoneNumber: string | null
          provider: Database["public"]["Enums"]["enum_sandbox_payment_logs_provider"]
          reference: string
          retryCount: number | null
          status:
            | Database["public"]["Enums"]["enum_sandbox_payment_logs_status"]
            | null
          tenantId: string
          transactionType:
            | Database["public"]["Enums"]["enum_sandbox_payment_logs_transactionType"]
            | null
          updatedAt: string
        }
        Insert: {
          amount: number
          createdAt: string
          failureReason?: string | null
          id: string
          metadata?: string | null
          phoneNumber?: string | null
          provider: Database["public"]["Enums"]["enum_sandbox_payment_logs_provider"]
          reference: string
          retryCount?: number | null
          status?:
            | Database["public"]["Enums"]["enum_sandbox_payment_logs_status"]
            | null
          tenantId: string
          transactionType?:
            | Database["public"]["Enums"]["enum_sandbox_payment_logs_transactionType"]
            | null
          updatedAt: string
        }
        Update: {
          amount?: number
          createdAt?: string
          failureReason?: string | null
          id?: string
          metadata?: string | null
          phoneNumber?: string | null
          provider?: Database["public"]["Enums"]["enum_sandbox_payment_logs_provider"]
          reference?: string
          retryCount?: number | null
          status?:
            | Database["public"]["Enums"]["enum_sandbox_payment_logs_status"]
            | null
          tenantId?: string
          transactionType?:
            | Database["public"]["Enums"]["enum_sandbox_payment_logs_transactionType"]
            | null
          updatedAt?: string
        }
        Relationships: []
      }
      saved_videos: {
        Row: {
          created_at: string | null
          id: string
          thumb_url: string | null
          title: string | null
          user_email: string
          video_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          thumb_url?: string | null
          title?: string | null
          user_email: string
          video_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          thumb_url?: string | null
          title?: string | null
          user_email?: string
          video_id?: string
        }
        Relationships: []
      }
      sessions: {
        Row: {
          bytesIn: number | null
          bytesOut: number | null
          createdAt: string
          expiryTime: string | null
          fraudScore: number | null
          id: string
          ipAddress: string | null
          lastUpdated: string | null
          macAddress: string
          mikrotikPassword: string
          mikrotikUsername: string
          paymentId: string
          routerId: string
          startTime: string | null
          status: Database["public"]["Enums"]["enum_sessions_status"] | null
          tenantId: string
          updatedAt: string
        }
        Insert: {
          bytesIn?: number | null
          bytesOut?: number | null
          createdAt: string
          expiryTime?: string | null
          fraudScore?: number | null
          id: string
          ipAddress?: string | null
          lastUpdated?: string | null
          macAddress: string
          mikrotikPassword: string
          mikrotikUsername: string
          paymentId: string
          routerId: string
          startTime?: string | null
          status?: Database["public"]["Enums"]["enum_sessions_status"] | null
          tenantId: string
          updatedAt: string
        }
        Update: {
          bytesIn?: number | null
          bytesOut?: number | null
          createdAt?: string
          expiryTime?: string | null
          fraudScore?: number | null
          id?: string
          ipAddress?: string | null
          lastUpdated?: string | null
          macAddress?: string
          mikrotikPassword?: string
          mikrotikUsername?: string
          paymentId?: string
          routerId?: string
          startTime?: string | null
          status?: Database["public"]["Enums"]["enum_sessions_status"] | null
          tenantId?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "sessions_paymentId_fkey"
            columns: ["paymentId"]
            isOneToOne: false
            referencedRelation: "payment"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sessions_tenantId_fkey"
            columns: ["tenantId"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      settlements: {
        Row: {
          amount: number
          createdAt: string
          id: string
          method: string | null
          paidAt: string | null
          processedBy: string | null
          referenceNumber: string | null
          status: Database["public"]["Enums"]["enum_settlements_status"] | null
          tenantId: string
          transactionFee: number | null
          updatedAt: string
          walletTransactionId: string | null
        }
        Insert: {
          amount: number
          createdAt: string
          id: string
          method?: string | null
          paidAt?: string | null
          processedBy?: string | null
          referenceNumber?: string | null
          status?: Database["public"]["Enums"]["enum_settlements_status"] | null
          tenantId: string
          transactionFee?: number | null
          updatedAt: string
          walletTransactionId?: string | null
        }
        Update: {
          amount?: number
          createdAt?: string
          id?: string
          method?: string | null
          paidAt?: string | null
          processedBy?: string | null
          referenceNumber?: string | null
          status?: Database["public"]["Enums"]["enum_settlements_status"] | null
          tenantId?: string
          transactionFee?: number | null
          updatedAt?: string
          walletTransactionId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "settlements_tenantId_fkey"
            columns: ["tenantId"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "settlements_walletTransactionId_fkey"
            columns: ["walletTransactionId"]
            isOneToOne: false
            referencedRelation: "walletTransactions"
            referencedColumns: ["id"]
          },
        ]
      }
      sms_campaign_messages: {
        Row: {
          campaignId: string
          createdAt: string
          creditsCost: number | null
          errorMessage: string | null
          id: string
          message: string
          phoneNumber: string
          providerReference: string | null
          retries: number | null
          scheduledAt: string | null
          sentAt: string | null
          status:
            | Database["public"]["Enums"]["enum_sms_campaign_messages_status"]
            | null
          tenantId: string
          updatedAt: string
        }
        Insert: {
          campaignId: string
          createdAt: string
          creditsCost?: number | null
          errorMessage?: string | null
          id: string
          message: string
          phoneNumber: string
          providerReference?: string | null
          retries?: number | null
          scheduledAt?: string | null
          sentAt?: string | null
          status?:
            | Database["public"]["Enums"]["enum_sms_campaign_messages_status"]
            | null
          tenantId: string
          updatedAt: string
        }
        Update: {
          campaignId?: string
          createdAt?: string
          creditsCost?: number | null
          errorMessage?: string | null
          id?: string
          message?: string
          phoneNumber?: string
          providerReference?: string | null
          retries?: number | null
          scheduledAt?: string | null
          sentAt?: string | null
          status?:
            | Database["public"]["Enums"]["enum_sms_campaign_messages_status"]
            | null
          tenantId?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "sms_campaign_messages_campaignId_fkey"
            columns: ["campaignId"]
            isOneToOne: false
            referencedRelation: "campaigns"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sms_campaign_messages_tenantId_fkey"
            columns: ["tenantId"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      sms_financial_ledgers: {
        Row: {
          availableOperatingBalanceCents: number | null
          createdAt: string
          id: string
          providerProcurementBalanceCents: number | null
          reservedProfitBalanceCents: number | null
          smsInventoryBalanceCount: number | null
          totalProcurementSpentCents: number | null
          totalReservedProfitCents: number | null
          totalTenantRevenueCents: number | null
          updatedAt: string
        }
        Insert: {
          availableOperatingBalanceCents?: number | null
          createdAt: string
          id: string
          providerProcurementBalanceCents?: number | null
          reservedProfitBalanceCents?: number | null
          smsInventoryBalanceCount?: number | null
          totalProcurementSpentCents?: number | null
          totalReservedProfitCents?: number | null
          totalTenantRevenueCents?: number | null
          updatedAt: string
        }
        Update: {
          availableOperatingBalanceCents?: number | null
          createdAt?: string
          id?: string
          providerProcurementBalanceCents?: number | null
          reservedProfitBalanceCents?: number | null
          smsInventoryBalanceCount?: number | null
          totalProcurementSpentCents?: number | null
          totalReservedProfitCents?: number | null
          totalTenantRevenueCents?: number | null
          updatedAt?: string
        }
        Relationships: []
      }
      sms_gateways: {
        Row: {
          apiBaseUrl: string | null
          apiKeyEncrypted: string | null
          apiSecretEncrypted: string | null
          callbackUrl: string | null
          createdAt: string
          id: string
          isActive: boolean | null
          maxPurchaseAmount: number | null
          metadata: string | null
          minPurchaseAmount: number | null
          name: string
          provider:
            | Database["public"]["Enums"]["enum_sms_gateways_provider"]
            | null
          senderId: string | null
          supportedCountries: string | null
          supportedCurrencies: string | null
          taxRate: number | null
          updatedAt: string
        }
        Insert: {
          apiBaseUrl?: string | null
          apiKeyEncrypted?: string | null
          apiSecretEncrypted?: string | null
          callbackUrl?: string | null
          createdAt: string
          id: string
          isActive?: boolean | null
          maxPurchaseAmount?: number | null
          metadata?: string | null
          minPurchaseAmount?: number | null
          name: string
          provider?:
            | Database["public"]["Enums"]["enum_sms_gateways_provider"]
            | null
          senderId?: string | null
          supportedCountries?: string | null
          supportedCurrencies?: string | null
          taxRate?: number | null
          updatedAt: string
        }
        Update: {
          apiBaseUrl?: string | null
          apiKeyEncrypted?: string | null
          apiSecretEncrypted?: string | null
          callbackUrl?: string | null
          createdAt?: string
          id?: string
          isActive?: boolean | null
          maxPurchaseAmount?: number | null
          metadata?: string | null
          minPurchaseAmount?: number | null
          name?: string
          provider?:
            | Database["public"]["Enums"]["enum_sms_gateways_provider"]
            | null
          senderId?: string | null
          supportedCountries?: string | null
          supportedCurrencies?: string | null
          taxRate?: number | null
          updatedAt?: string
        }
        Relationships: []
      }
      sms_ledger_transactions: {
        Row: {
          amountCents: number
          createdAt: string
          id: string
          notes: string | null
          procurementTaskId: string | null
          providerProcurementBalanceAfterCents: number | null
          reservedProfitBalanceAfterCents: number | null
          tenantId: string | null
          transactionType: Database["public"]["Enums"]["enum_sms_ledger_transactions_transactionType"]
          updatedAt: string
        }
        Insert: {
          amountCents: number
          createdAt: string
          id: string
          notes?: string | null
          procurementTaskId?: string | null
          providerProcurementBalanceAfterCents?: number | null
          reservedProfitBalanceAfterCents?: number | null
          tenantId?: string | null
          transactionType: Database["public"]["Enums"]["enum_sms_ledger_transactions_transactionType"]
          updatedAt: string
        }
        Update: {
          amountCents?: number
          createdAt?: string
          id?: string
          notes?: string | null
          procurementTaskId?: string | null
          providerProcurementBalanceAfterCents?: number | null
          reservedProfitBalanceAfterCents?: number | null
          tenantId?: string | null
          transactionType?: Database["public"]["Enums"]["enum_sms_ledger_transactions_transactionType"]
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "sms_ledger_transactions_procurementTaskId_fkey"
            columns: ["procurementTaskId"]
            isOneToOne: false
            referencedRelation: "sms_procurement_tasks"
            referencedColumns: ["id"]
          },
        ]
      }
      sms_logs: {
        Row: {
          cost: number | null
          createdAt: string
          id: string
          message: string
          phoneNumber: string
          providerReference: string | null
          status: Database["public"]["Enums"]["enum_sms_logs_status"] | null
          tenantId: string
          updatedAt: string
        }
        Insert: {
          cost?: number | null
          createdAt: string
          id: string
          message: string
          phoneNumber: string
          providerReference?: string | null
          status?: Database["public"]["Enums"]["enum_sms_logs_status"] | null
          tenantId: string
          updatedAt: string
        }
        Update: {
          cost?: number | null
          createdAt?: string
          id?: string
          message?: string
          phoneNumber?: string
          providerReference?: string | null
          status?: Database["public"]["Enums"]["enum_sms_logs_status"] | null
          tenantId?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "sms_logs_tenantId_fkey"
            columns: ["tenantId"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      sms_packages: {
        Row: {
          costPrice: number | null
          createdAt: string
          description: string | null
          id: string
          isCustom: boolean | null
          name: string
          sellingPrice: number
          smsCount: number
          sortOrder: number | null
          status: Database["public"]["Enums"]["enum_sms_packages_status"] | null
          updatedAt: string
        }
        Insert: {
          costPrice?: number | null
          createdAt: string
          description?: string | null
          id: string
          isCustom?: boolean | null
          name: string
          sellingPrice: number
          smsCount: number
          sortOrder?: number | null
          status?:
            | Database["public"]["Enums"]["enum_sms_packages_status"]
            | null
          updatedAt: string
        }
        Update: {
          costPrice?: number | null
          createdAt?: string
          description?: string | null
          id?: string
          isCustom?: boolean | null
          name?: string
          sellingPrice?: number
          smsCount?: number
          sortOrder?: number | null
          status?:
            | Database["public"]["Enums"]["enum_sms_packages_status"]
            | null
          updatedAt?: string
        }
        Relationships: []
      }
      sms_procurement_tasks: {
        Row: {
          allocatedAt: string | null
          amountPaidCents: number
          createdAt: string
          executionMode:
            | Database["public"]["Enums"]["enum_sms_procurement_tasks_executionMode"]
            | null
          failureReason: string | null
          id: string
          invoiceId: string
          packageId: string | null
          procurementHash: string
          procurementNumber: string
          procurementStatus:
            | Database["public"]["Enums"]["enum_sms_procurement_tasks_procurementStatus"]
            | null
          providerBalanceAfterCents: number | null
          providerBalanceBeforeCents: number | null
          providerCostCents: number
          providerReference: string | null
          reservedProfitCents: number
          smsCount: number
          tenantId: string
          updatedAt: string
          verifiedAt: string | null
        }
        Insert: {
          allocatedAt?: string | null
          amountPaidCents: number
          createdAt: string
          executionMode?:
            | Database["public"]["Enums"]["enum_sms_procurement_tasks_executionMode"]
            | null
          failureReason?: string | null
          id: string
          invoiceId: string
          packageId?: string | null
          procurementHash: string
          procurementNumber: string
          procurementStatus?:
            | Database["public"]["Enums"]["enum_sms_procurement_tasks_procurementStatus"]
            | null
          providerBalanceAfterCents?: number | null
          providerBalanceBeforeCents?: number | null
          providerCostCents: number
          providerReference?: string | null
          reservedProfitCents: number
          smsCount: number
          tenantId: string
          updatedAt: string
          verifiedAt?: string | null
        }
        Update: {
          allocatedAt?: string | null
          amountPaidCents?: number
          createdAt?: string
          executionMode?:
            | Database["public"]["Enums"]["enum_sms_procurement_tasks_executionMode"]
            | null
          failureReason?: string | null
          id?: string
          invoiceId?: string
          packageId?: string | null
          procurementHash?: string
          procurementNumber?: string
          procurementStatus?:
            | Database["public"]["Enums"]["enum_sms_procurement_tasks_procurementStatus"]
            | null
          providerBalanceAfterCents?: number | null
          providerBalanceBeforeCents?: number | null
          providerCostCents?: number
          providerReference?: string | null
          reservedProfitCents?: number
          smsCount?: number
          tenantId?: string
          updatedAt?: string
          verifiedAt?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sms_procurement_tasks_tenantId_fkey"
            columns: ["tenantId"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      sms_transactions: {
        Row: {
          amount: number
          completedAt: string | null
          createdAt: string
          creditsAdded: number
          failureReason: string | null
          id: string
          idempotencyKey: string | null
          intasendCheckoutId: string | null
          intasendTrackingId: string | null
          invoiceNumber: string | null
          metadata: string | null
          packageId: string | null
          paymentMethod: Database["public"]["Enums"]["enum_sms_transactions_paymentMethod"]
          paymentReference: string | null
          status:
            | Database["public"]["Enums"]["enum_sms_transactions_status"]
            | null
          tenantId: string
          updatedAt: string
        }
        Insert: {
          amount: number
          completedAt?: string | null
          createdAt: string
          creditsAdded: number
          failureReason?: string | null
          id: string
          idempotencyKey?: string | null
          intasendCheckoutId?: string | null
          intasendTrackingId?: string | null
          invoiceNumber?: string | null
          metadata?: string | null
          packageId?: string | null
          paymentMethod: Database["public"]["Enums"]["enum_sms_transactions_paymentMethod"]
          paymentReference?: string | null
          status?:
            | Database["public"]["Enums"]["enum_sms_transactions_status"]
            | null
          tenantId: string
          updatedAt: string
        }
        Update: {
          amount?: number
          completedAt?: string | null
          createdAt?: string
          creditsAdded?: number
          failureReason?: string | null
          id?: string
          idempotencyKey?: string | null
          intasendCheckoutId?: string | null
          intasendTrackingId?: string | null
          invoiceNumber?: string | null
          metadata?: string | null
          packageId?: string | null
          paymentMethod?: Database["public"]["Enums"]["enum_sms_transactions_paymentMethod"]
          paymentReference?: string | null
          status?:
            | Database["public"]["Enums"]["enum_sms_transactions_status"]
            | null
          tenantId?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "sms_transactions_packageId_fkey"
            columns: ["packageId"]
            isOneToOne: false
            referencedRelation: "sms_packages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sms_transactions_tenantId_fkey"
            columns: ["tenantId"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      staging_error_logs: {
        Row: {
          createdAt: string
          id: string
          message: string
          metadata: string | null
          requestPath: string | null
          severity:
            | Database["public"]["Enums"]["enum_staging_error_logs_severity"]
            | null
          source:
            | Database["public"]["Enums"]["enum_staging_error_logs_source"]
            | null
          stackTrace: string | null
          suggestedFix: string | null
          tenantId: string | null
          updatedAt: string
          userId: string | null
        }
        Insert: {
          createdAt: string
          id: string
          message: string
          metadata?: string | null
          requestPath?: string | null
          severity?:
            | Database["public"]["Enums"]["enum_staging_error_logs_severity"]
            | null
          source?:
            | Database["public"]["Enums"]["enum_staging_error_logs_source"]
            | null
          stackTrace?: string | null
          suggestedFix?: string | null
          tenantId?: string | null
          updatedAt: string
          userId?: string | null
        }
        Update: {
          createdAt?: string
          id?: string
          message?: string
          metadata?: string | null
          requestPath?: string | null
          severity?:
            | Database["public"]["Enums"]["enum_staging_error_logs_severity"]
            | null
          source?:
            | Database["public"]["Enums"]["enum_staging_error_logs_source"]
            | null
          stackTrace?: string | null
          suggestedFix?: string | null
          tenantId?: string | null
          updatedAt?: string
          userId?: string | null
        }
        Relationships: []
      }
      stk_callback_logs: {
        Row: {
          checkout_request_id: string | null
          created_at: string
          id: string
          merchant_request_id: string | null
          raw_payload: Json | null
          result_code: string | null
          result_desc: string | null
        }
        Insert: {
          checkout_request_id?: string | null
          created_at?: string
          id?: string
          merchant_request_id?: string | null
          raw_payload?: Json | null
          result_code?: string | null
          result_desc?: string | null
        }
        Update: {
          checkout_request_id?: string | null
          created_at?: string
          id?: string
          merchant_request_id?: string | null
          raw_payload?: Json | null
          result_code?: string | null
          result_desc?: string | null
        }
        Relationships: []
      }
      subscriber_groups: {
        Row: {
          createdAt: string
          description: string | null
          discountPercentage: number | null
          id: string
          name: string
          tenantId: string
          updatedAt: string
        }
        Insert: {
          createdAt: string
          description?: string | null
          discountPercentage?: number | null
          id: string
          name: string
          tenantId: string
          updatedAt: string
        }
        Update: {
          createdAt?: string
          description?: string | null
          discountPercentage?: number | null
          id?: string
          name?: string
          tenantId?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "subscriber_groups_tenantId_fkey"
            columns: ["tenantId"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      subscribers: {
        Row: {
          address: string | null
          altPhone: string | null
          archivedAt: string | null
          autoRenewal: boolean | null
          connectionType:
            | Database["public"]["Enums"]["enum_subscribers_connectionType"]
            | null
          createdAt: string
          customerGroupId: string | null
          customerType:
            | Database["public"]["Enums"]["enum_subscribers_customerType"]
            | null
          email: string | null
          expiryDate: string | null
          firstName: string | null
          id: string
          idNumber: string | null
          isDraft: boolean | null
          lastName: string | null
          lastPaymentDate: string | null
          location: string | null
          macAddress: string | null
          name: string | null
          notes: string | null
          notificationsEnabled: boolean | null
          packageId: number | null
          password: string | null
          phoneNumber: string
          pppoePassword: string | null
          pppoeUsername: string | null
          routerId: string | null
          status: Database["public"]["Enums"]["enum_subscribers_status"] | null
          tenantId: string
          updatedAt: string
          username: string | null
        }
        Insert: {
          address?: string | null
          altPhone?: string | null
          archivedAt?: string | null
          autoRenewal?: boolean | null
          connectionType?:
            | Database["public"]["Enums"]["enum_subscribers_connectionType"]
            | null
          createdAt: string
          customerGroupId?: string | null
          customerType?:
            | Database["public"]["Enums"]["enum_subscribers_customerType"]
            | null
          email?: string | null
          expiryDate?: string | null
          firstName?: string | null
          id: string
          idNumber?: string | null
          isDraft?: boolean | null
          lastName?: string | null
          lastPaymentDate?: string | null
          location?: string | null
          macAddress?: string | null
          name?: string | null
          notes?: string | null
          notificationsEnabled?: boolean | null
          packageId?: number | null
          password?: string | null
          phoneNumber: string
          pppoePassword?: string | null
          pppoeUsername?: string | null
          routerId?: string | null
          status?: Database["public"]["Enums"]["enum_subscribers_status"] | null
          tenantId: string
          updatedAt: string
          username?: string | null
        }
        Update: {
          address?: string | null
          altPhone?: string | null
          archivedAt?: string | null
          autoRenewal?: boolean | null
          connectionType?:
            | Database["public"]["Enums"]["enum_subscribers_connectionType"]
            | null
          createdAt?: string
          customerGroupId?: string | null
          customerType?:
            | Database["public"]["Enums"]["enum_subscribers_customerType"]
            | null
          email?: string | null
          expiryDate?: string | null
          firstName?: string | null
          id?: string
          idNumber?: string | null
          isDraft?: boolean | null
          lastName?: string | null
          lastPaymentDate?: string | null
          location?: string | null
          macAddress?: string | null
          name?: string | null
          notes?: string | null
          notificationsEnabled?: boolean | null
          packageId?: number | null
          password?: string | null
          phoneNumber?: string
          pppoePassword?: string | null
          pppoeUsername?: string | null
          routerId?: string | null
          status?: Database["public"]["Enums"]["enum_subscribers_status"] | null
          tenantId?: string
          updatedAt?: string
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "subscribers_customerGroupId_fkey"
            columns: ["customerGroupId"]
            isOneToOne: false
            referencedRelation: "subscriber_groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscribers_packageId_fkey"
            columns: ["packageId"]
            isOneToOne: false
            referencedRelation: "packages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "subscribers_tenantId_fkey"
            columns: ["tenantId"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      subscription_payments: {
        Row: {
          amount: number
          checkout_request_id: string | null
          created_at: string
          id: string
          merchant_request_id: string | null
          mpesa_receipt: string | null
          phone: string
          result_code: string | null
          result_desc: string | null
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          amount?: number
          checkout_request_id?: string | null
          created_at?: string
          id?: string
          merchant_request_id?: string | null
          mpesa_receipt?: string | null
          phone: string
          result_code?: string | null
          result_desc?: string | null
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          amount?: number
          checkout_request_id?: string | null
          created_at?: string
          id?: string
          merchant_request_id?: string | null
          mpesa_receipt?: string | null
          phone?: string
          result_code?: string | null
          result_desc?: string | null
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      subscription_plans: {
        Row: {
          analyticsFeatures: boolean | null
          apiAccess: boolean | null
          createdAt: string
          customIntegrations: boolean | null
          description: string | null
          id: string
          isActive: boolean | null
          isPopular: boolean | null
          marketingFeatures: boolean | null
          maxActiveUsers: number | null
          maxAdvertisements: number | null
          maxBranches: number | null
          maxCampaigns: number | null
          maxIntegrations: number | null
          maxRouters: number | null
          maxSMS: number | null
          maxStaff: number | null
          maxWhatsapp: number | null
          monthlyPriceCents: number | null
          multiBranchFeatures: boolean | null
          name: string
          slug: string
          storageLimitMB: number | null
          supportLevel:
            | Database["public"]["Enums"]["enum_subscription_plans_supportLevel"]
            | null
          updatedAt: string
          whiteLabelFeatures: boolean | null
          yearlyPriceCents: number | null
        }
        Insert: {
          analyticsFeatures?: boolean | null
          apiAccess?: boolean | null
          createdAt: string
          customIntegrations?: boolean | null
          description?: string | null
          id: string
          isActive?: boolean | null
          isPopular?: boolean | null
          marketingFeatures?: boolean | null
          maxActiveUsers?: number | null
          maxAdvertisements?: number | null
          maxBranches?: number | null
          maxCampaigns?: number | null
          maxIntegrations?: number | null
          maxRouters?: number | null
          maxSMS?: number | null
          maxStaff?: number | null
          maxWhatsapp?: number | null
          monthlyPriceCents?: number | null
          multiBranchFeatures?: boolean | null
          name: string
          slug: string
          storageLimitMB?: number | null
          supportLevel?:
            | Database["public"]["Enums"]["enum_subscription_plans_supportLevel"]
            | null
          updatedAt: string
          whiteLabelFeatures?: boolean | null
          yearlyPriceCents?: number | null
        }
        Update: {
          analyticsFeatures?: boolean | null
          apiAccess?: boolean | null
          createdAt?: string
          customIntegrations?: boolean | null
          description?: string | null
          id?: string
          isActive?: boolean | null
          isPopular?: boolean | null
          marketingFeatures?: boolean | null
          maxActiveUsers?: number | null
          maxAdvertisements?: number | null
          maxBranches?: number | null
          maxCampaigns?: number | null
          maxIntegrations?: number | null
          maxRouters?: number | null
          maxSMS?: number | null
          maxStaff?: number | null
          maxWhatsapp?: number | null
          monthlyPriceCents?: number | null
          multiBranchFeatures?: boolean | null
          name?: string
          slug?: string
          storageLimitMB?: number | null
          supportLevel?:
            | Database["public"]["Enums"]["enum_subscription_plans_supportLevel"]
            | null
          updatedAt?: string
          whiteLabelFeatures?: boolean | null
          yearlyPriceCents?: number | null
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          cancel_at_period_end: boolean
          created_at: string
          current_period_end: string | null
          current_period_start: string | null
          email: string | null
          last_amount_paid: number | null
          last_mpesa_receipt: string | null
          price_id: string | null
          status: string
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          cancel_at_period_end?: boolean
          created_at?: string
          current_period_end?: string | null
          current_period_start?: string | null
          email?: string | null
          last_amount_paid?: number | null
          last_mpesa_receipt?: string | null
          price_id?: string | null
          status?: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          cancel_at_period_end?: boolean
          created_at?: string
          current_period_end?: string | null
          current_period_start?: string | null
          email?: string | null
          last_amount_paid?: number | null
          last_mpesa_receipt?: string | null
          price_id?: string | null
          status?: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      tenant_addon_modules: {
        Row: {
          createdAt: string
          id: string
          moduleName: Database["public"]["Enums"]["enum_tenant_addon_modules_moduleName"]
          monthlyPriceCents: number | null
          status:
            | Database["public"]["Enums"]["enum_tenant_addon_modules_status"]
            | null
          tenantId: string
          trialEndsAt: string | null
          updatedAt: string
          yearlyPriceCents: number | null
        }
        Insert: {
          createdAt: string
          id: string
          moduleName: Database["public"]["Enums"]["enum_tenant_addon_modules_moduleName"]
          monthlyPriceCents?: number | null
          status?:
            | Database["public"]["Enums"]["enum_tenant_addon_modules_status"]
            | null
          tenantId: string
          trialEndsAt?: string | null
          updatedAt: string
          yearlyPriceCents?: number | null
        }
        Update: {
          createdAt?: string
          id?: string
          moduleName?: Database["public"]["Enums"]["enum_tenant_addon_modules_moduleName"]
          monthlyPriceCents?: number | null
          status?:
            | Database["public"]["Enums"]["enum_tenant_addon_modules_status"]
            | null
          tenantId?: string
          trialEndsAt?: string | null
          updatedAt?: string
          yearlyPriceCents?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "tenant_addon_modules_tenantId_fkey"
            columns: ["tenantId"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      tenant_captive_portal_brandings: {
        Row: {
          accentColor: string | null
          backgroundBlur: number | null
          backgroundColor: string | null
          backgroundOverlayOpacity: number | null
          backgroundType:
            | Database["public"]["Enums"]["enum_tenant_captive_portal_brandings_backgroundType"]
            | null
          backgroundUrl: string | null
          backgroundVideoUrl: string | null
          businessName: string | null
          buttonColor: string | null
          copyrightText: string | null
          createdAt: string
          customDomain: string | null
          darkModeLogoUrl: string | null
          description: string | null
          faviconUrl: string | null
          featuredPackageId: string | null
          footerColor: string | null
          footerLogoUrl: string | null
          footerText: string | null
          gradientEndColor: string | null
          gradientStartColor: string | null
          headline: string | null
          id: string
          isApproved: boolean | null
          landingHeroSubtitle: string | null
          landingHeroTitle: string | null
          lightModeLogoUrl: string | null
          linkColor: string | null
          loginInstructions: string | null
          loginLogoUrl: string | null
          mobileBackgroundUrl: string | null
          mobileLogoUrl: string | null
          navColor: string | null
          packageCardLayout: string | null
          packageCardStyle: string | null
          paymentInstructions: string | null
          physicalAddress: string | null
          pinnedPackageIds: string | null
          primaryColor: string | null
          primaryLogoUrl: string | null
          privacyNotice: string | null
          secondaryColor: string | null
          showLandingHero: boolean | null
          showPackageBadges: boolean | null
          showPromotions: boolean | null
          showSpeedBadges: boolean | null
          socialLinks: string | null
          subheadline: string | null
          supportEmail: string | null
          supportInfo: string | null
          supportPhone: string | null
          tagline: string | null
          tenantId: string
          termsConditions: string | null
          textColor: string | null
          updatedAt: string
          voucherInstructions: string | null
          websiteUrl: string | null
          welcomeMessage: string | null
          welcomeScreenLogoUrl: string | null
          whatsappNumber: string | null
        }
        Insert: {
          accentColor?: string | null
          backgroundBlur?: number | null
          backgroundColor?: string | null
          backgroundOverlayOpacity?: number | null
          backgroundType?:
            | Database["public"]["Enums"]["enum_tenant_captive_portal_brandings_backgroundType"]
            | null
          backgroundUrl?: string | null
          backgroundVideoUrl?: string | null
          businessName?: string | null
          buttonColor?: string | null
          copyrightText?: string | null
          createdAt: string
          customDomain?: string | null
          darkModeLogoUrl?: string | null
          description?: string | null
          faviconUrl?: string | null
          featuredPackageId?: string | null
          footerColor?: string | null
          footerLogoUrl?: string | null
          footerText?: string | null
          gradientEndColor?: string | null
          gradientStartColor?: string | null
          headline?: string | null
          id: string
          isApproved?: boolean | null
          landingHeroSubtitle?: string | null
          landingHeroTitle?: string | null
          lightModeLogoUrl?: string | null
          linkColor?: string | null
          loginInstructions?: string | null
          loginLogoUrl?: string | null
          mobileBackgroundUrl?: string | null
          mobileLogoUrl?: string | null
          navColor?: string | null
          packageCardLayout?: string | null
          packageCardStyle?: string | null
          paymentInstructions?: string | null
          physicalAddress?: string | null
          pinnedPackageIds?: string | null
          primaryColor?: string | null
          primaryLogoUrl?: string | null
          privacyNotice?: string | null
          secondaryColor?: string | null
          showLandingHero?: boolean | null
          showPackageBadges?: boolean | null
          showPromotions?: boolean | null
          showSpeedBadges?: boolean | null
          socialLinks?: string | null
          subheadline?: string | null
          supportEmail?: string | null
          supportInfo?: string | null
          supportPhone?: string | null
          tagline?: string | null
          tenantId: string
          termsConditions?: string | null
          textColor?: string | null
          updatedAt: string
          voucherInstructions?: string | null
          websiteUrl?: string | null
          welcomeMessage?: string | null
          welcomeScreenLogoUrl?: string | null
          whatsappNumber?: string | null
        }
        Update: {
          accentColor?: string | null
          backgroundBlur?: number | null
          backgroundColor?: string | null
          backgroundOverlayOpacity?: number | null
          backgroundType?:
            | Database["public"]["Enums"]["enum_tenant_captive_portal_brandings_backgroundType"]
            | null
          backgroundUrl?: string | null
          backgroundVideoUrl?: string | null
          businessName?: string | null
          buttonColor?: string | null
          copyrightText?: string | null
          createdAt?: string
          customDomain?: string | null
          darkModeLogoUrl?: string | null
          description?: string | null
          faviconUrl?: string | null
          featuredPackageId?: string | null
          footerColor?: string | null
          footerLogoUrl?: string | null
          footerText?: string | null
          gradientEndColor?: string | null
          gradientStartColor?: string | null
          headline?: string | null
          id?: string
          isApproved?: boolean | null
          landingHeroSubtitle?: string | null
          landingHeroTitle?: string | null
          lightModeLogoUrl?: string | null
          linkColor?: string | null
          loginInstructions?: string | null
          loginLogoUrl?: string | null
          mobileBackgroundUrl?: string | null
          mobileLogoUrl?: string | null
          navColor?: string | null
          packageCardLayout?: string | null
          packageCardStyle?: string | null
          paymentInstructions?: string | null
          physicalAddress?: string | null
          pinnedPackageIds?: string | null
          primaryColor?: string | null
          primaryLogoUrl?: string | null
          privacyNotice?: string | null
          secondaryColor?: string | null
          showLandingHero?: boolean | null
          showPackageBadges?: boolean | null
          showPromotions?: boolean | null
          showSpeedBadges?: boolean | null
          socialLinks?: string | null
          subheadline?: string | null
          supportEmail?: string | null
          supportInfo?: string | null
          supportPhone?: string | null
          tagline?: string | null
          tenantId?: string
          termsConditions?: string | null
          textColor?: string | null
          updatedAt?: string
          voucherInstructions?: string | null
          websiteUrl?: string | null
          welcomeMessage?: string | null
          welcomeScreenLogoUrl?: string | null
          whatsappNumber?: string | null
        }
        Relationships: []
      }
      tenant_documents: {
        Row: {
          createdAt: string
          docType: Database["public"]["Enums"]["enum_tenant_documents_docType"]
          fileName: string
          fileSize: number | null
          fileType: string
          fileUrl: string
          id: string
          notes: string | null
          status:
            | Database["public"]["Enums"]["enum_tenant_documents_status"]
            | null
          tenantId: string
          updatedAt: string
        }
        Insert: {
          createdAt: string
          docType: Database["public"]["Enums"]["enum_tenant_documents_docType"]
          fileName: string
          fileSize?: number | null
          fileType: string
          fileUrl: string
          id: string
          notes?: string | null
          status?:
            | Database["public"]["Enums"]["enum_tenant_documents_status"]
            | null
          tenantId: string
          updatedAt: string
        }
        Update: {
          createdAt?: string
          docType?: Database["public"]["Enums"]["enum_tenant_documents_docType"]
          fileName?: string
          fileSize?: number | null
          fileType?: string
          fileUrl?: string
          id?: string
          notes?: string | null
          status?:
            | Database["public"]["Enums"]["enum_tenant_documents_status"]
            | null
          tenantId?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "tenant_documents_tenantId_fkey"
            columns: ["tenantId"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      tenant_sms_wallets: {
        Row: {
          balance: number | null
          createdAt: string
          id: string
          lastPurchaseAt: string | null
          lastPurchasePackageId: string | null
          lowBalanceNotified: boolean | null
          lowBalanceThreshold: number | null
          purchasedCredits: number | null
          tenantId: string
          updatedAt: string
          usedCredits: number | null
        }
        Insert: {
          balance?: number | null
          createdAt: string
          id: string
          lastPurchaseAt?: string | null
          lastPurchasePackageId?: string | null
          lowBalanceNotified?: boolean | null
          lowBalanceThreshold?: number | null
          purchasedCredits?: number | null
          tenantId: string
          updatedAt: string
          usedCredits?: number | null
        }
        Update: {
          balance?: number | null
          createdAt?: string
          id?: string
          lastPurchaseAt?: string | null
          lastPurchasePackageId?: string | null
          lowBalanceNotified?: boolean | null
          lowBalanceThreshold?: number | null
          purchasedCredits?: number | null
          tenantId?: string
          updatedAt?: string
          usedCredits?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "tenant_sms_wallets_tenantId_fkey"
            columns: ["tenantId"]
            isOneToOne: true
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      tenant_subscriptions: {
        Row: {
          amount: number | null
          autoPayEnabled: boolean | null
          autoRenew: boolean | null
          billingCycle:
            | Database["public"]["Enums"]["enum_tenant_subscriptions_billingCycle"]
            | null
          cancelledAt: string | null
          createdAt: string
          currentPeriodEnd: string | null
          currentPeriodStart: string | null
          gracePeriodEndDate: string | null
          id: string
          paymentReference: string | null
          paymentToken: string | null
          planId: string
          startDate: string | null
          status:
            | Database["public"]["Enums"]["enum_tenant_subscriptions_status"]
            | null
          tenantId: string
          trialEndDate: string | null
          updatedAt: string
        }
        Insert: {
          amount?: number | null
          autoPayEnabled?: boolean | null
          autoRenew?: boolean | null
          billingCycle?:
            | Database["public"]["Enums"]["enum_tenant_subscriptions_billingCycle"]
            | null
          cancelledAt?: string | null
          createdAt: string
          currentPeriodEnd?: string | null
          currentPeriodStart?: string | null
          gracePeriodEndDate?: string | null
          id: string
          paymentReference?: string | null
          paymentToken?: string | null
          planId: string
          startDate?: string | null
          status?:
            | Database["public"]["Enums"]["enum_tenant_subscriptions_status"]
            | null
          tenantId: string
          trialEndDate?: string | null
          updatedAt: string
        }
        Update: {
          amount?: number | null
          autoPayEnabled?: boolean | null
          autoRenew?: boolean | null
          billingCycle?:
            | Database["public"]["Enums"]["enum_tenant_subscriptions_billingCycle"]
            | null
          cancelledAt?: string | null
          createdAt?: string
          currentPeriodEnd?: string | null
          currentPeriodStart?: string | null
          gracePeriodEndDate?: string | null
          id?: string
          paymentReference?: string | null
          paymentToken?: string | null
          planId?: string
          startDate?: string | null
          status?:
            | Database["public"]["Enums"]["enum_tenant_subscriptions_status"]
            | null
          tenantId?: string
          trialEndDate?: string | null
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "tenant_subscriptions_planId_fkey"
            columns: ["planId"]
            isOneToOne: false
            referencedRelation: "subscription_plans"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tenant_subscriptions_tenantId_fkey"
            columns: ["tenantId"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      tenant_withdrawals: {
        Row: {
          amount: number
          completedAt: string | null
          createdAt: string
          failureReason: string | null
          id: string
          method:
            | Database["public"]["Enums"]["enum_tenant_withdrawals_method"]
            | null
          recipientDetails: string
          referenceId: string | null
          requestedAt: string | null
          requestedBy: string | null
          status:
            | Database["public"]["Enums"]["enum_tenant_withdrawals_status"]
            | null
          tenantId: string
          updatedAt: string
        }
        Insert: {
          amount: number
          completedAt?: string | null
          createdAt: string
          failureReason?: string | null
          id: string
          method?:
            | Database["public"]["Enums"]["enum_tenant_withdrawals_method"]
            | null
          recipientDetails: string
          referenceId?: string | null
          requestedAt?: string | null
          requestedBy?: string | null
          status?:
            | Database["public"]["Enums"]["enum_tenant_withdrawals_status"]
            | null
          tenantId: string
          updatedAt: string
        }
        Update: {
          amount?: number
          completedAt?: string | null
          createdAt?: string
          failureReason?: string | null
          id?: string
          method?:
            | Database["public"]["Enums"]["enum_tenant_withdrawals_method"]
            | null
          recipientDetails?: string
          referenceId?: string | null
          requestedAt?: string | null
          requestedBy?: string | null
          status?:
            | Database["public"]["Enums"]["enum_tenant_withdrawals_status"]
            | null
          tenantId?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "tenant_withdrawals_tenantId_fkey"
            columns: ["tenantId"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      tenants: {
        Row: {
          activeUserFee: number | null
          aggregatorSubAccountId: string | null
          autoPayAuthorizedAt: string | null
          autoPayEnabled: boolean | null
          autoPayFailureCount: number | null
          autoPayMandateType: string | null
          autoPayPhone: string | null
          autoPayToken: string | null
          bankAccountDetails: string | null
          bankAccountName: string | null
          bankAccountNumber: string | null
          bankBranch: string | null
          bankIban: string | null
          bankName: string | null
          bankSwiftCode: string | null
          baseMonthlyFee: number | null
          businessAddress: string | null
          businessEmail: string | null
          businessLogoUrl: string | null
          businessRegistrationNumber: string | null
          commissionPercentage: number | null
          contactPhone: string | null
          createdAt: string
          defaultWithdrawalMethod: string | null
          description: string | null
          directPayoutEnabled: boolean | null
          faviconUrl: string | null
          id: string
          idNumber: string | null
          intasendPublishableKey: string | null
          intasendSecretKey: string | null
          isGoLiveChecked: boolean | null
          isProduction: boolean | null
          lastAutoPayAttemptAt: string | null
          lastAutoPayStatus: string | null
          lastSanitizedAt: string | null
          loginLogoUrl: string | null
          logoUrl: string | null
          minimumWithdrawalAmount: number | null
          mpesaConsumerKey: string | null
          mpesaConsumerSecret: string | null
          mpesaEnvironment: string | null
          mpesaInitiatorName: string | null
          mpesaInitiatorPassword: string | null
          mpesaPasskey: string | null
          mpesaPaybillAccount: string | null
          mpesaPaybillNumber: string | null
          mpesaPochiNumber: string | null
          mpesaShortcode: string | null
          mpesaTillName: string | null
          mpesaTillNumber: string | null
          mpesaWebhookSecret: string | null
          mpesaWithdrawalName: string | null
          mpesaWithdrawalNumber: string | null
          name: string
          nextPaymentDueDate: string | null
          notificationPreferences: string | null
          paybillAccountNumber: string | null
          payoutMethod: string | null
          portalLogoUrl: string | null
          primaryColor: string | null
          productionReadyAt: string | null
          secondaryColor: string | null
          settlementMethod: string | null
          settlementSchedule: string | null
          smsFee: number | null
          status: Database["public"]["Enums"]["enum_tenants_status"] | null
          storeName: string | null
          subdomain: string
          subscriptionExpiry: string | null
          subscriptionStatus: string | null
          supportEmail: string | null
          supportPhone: string | null
          taxPin: string | null
          themeColor: string | null
          themePreference:
            | Database["public"]["Enums"]["enum_tenants_themePreference"]
            | null
          tradingName: string | null
          transactionFee: number | null
          trialEndsAt: string | null
          updatedAt: string
          vatNumber: string | null
          website: string | null
          withdrawalVerificationMethod:
            | Database["public"]["Enums"]["enum_tenants_withdrawalVerificationMethod"]
            | null
        }
        Insert: {
          activeUserFee?: number | null
          aggregatorSubAccountId?: string | null
          autoPayAuthorizedAt?: string | null
          autoPayEnabled?: boolean | null
          autoPayFailureCount?: number | null
          autoPayMandateType?: string | null
          autoPayPhone?: string | null
          autoPayToken?: string | null
          bankAccountDetails?: string | null
          bankAccountName?: string | null
          bankAccountNumber?: string | null
          bankBranch?: string | null
          bankIban?: string | null
          bankName?: string | null
          bankSwiftCode?: string | null
          baseMonthlyFee?: number | null
          businessAddress?: string | null
          businessEmail?: string | null
          businessLogoUrl?: string | null
          businessRegistrationNumber?: string | null
          commissionPercentage?: number | null
          contactPhone?: string | null
          createdAt: string
          defaultWithdrawalMethod?: string | null
          description?: string | null
          directPayoutEnabled?: boolean | null
          faviconUrl?: string | null
          id: string
          idNumber?: string | null
          intasendPublishableKey?: string | null
          intasendSecretKey?: string | null
          isGoLiveChecked?: boolean | null
          isProduction?: boolean | null
          lastAutoPayAttemptAt?: string | null
          lastAutoPayStatus?: string | null
          lastSanitizedAt?: string | null
          loginLogoUrl?: string | null
          logoUrl?: string | null
          minimumWithdrawalAmount?: number | null
          mpesaConsumerKey?: string | null
          mpesaConsumerSecret?: string | null
          mpesaEnvironment?: string | null
          mpesaInitiatorName?: string | null
          mpesaInitiatorPassword?: string | null
          mpesaPasskey?: string | null
          mpesaPaybillAccount?: string | null
          mpesaPaybillNumber?: string | null
          mpesaPochiNumber?: string | null
          mpesaShortcode?: string | null
          mpesaTillName?: string | null
          mpesaTillNumber?: string | null
          mpesaWebhookSecret?: string | null
          mpesaWithdrawalName?: string | null
          mpesaWithdrawalNumber?: string | null
          name: string
          nextPaymentDueDate?: string | null
          notificationPreferences?: string | null
          paybillAccountNumber?: string | null
          payoutMethod?: string | null
          portalLogoUrl?: string | null
          primaryColor?: string | null
          productionReadyAt?: string | null
          secondaryColor?: string | null
          settlementMethod?: string | null
          settlementSchedule?: string | null
          smsFee?: number | null
          status?: Database["public"]["Enums"]["enum_tenants_status"] | null
          storeName?: string | null
          subdomain: string
          subscriptionExpiry?: string | null
          subscriptionStatus?: string | null
          supportEmail?: string | null
          supportPhone?: string | null
          taxPin?: string | null
          themeColor?: string | null
          themePreference?:
            | Database["public"]["Enums"]["enum_tenants_themePreference"]
            | null
          tradingName?: string | null
          transactionFee?: number | null
          trialEndsAt?: string | null
          updatedAt: string
          vatNumber?: string | null
          website?: string | null
          withdrawalVerificationMethod?:
            | Database["public"]["Enums"]["enum_tenants_withdrawalVerificationMethod"]
            | null
        }
        Update: {
          activeUserFee?: number | null
          aggregatorSubAccountId?: string | null
          autoPayAuthorizedAt?: string | null
          autoPayEnabled?: boolean | null
          autoPayFailureCount?: number | null
          autoPayMandateType?: string | null
          autoPayPhone?: string | null
          autoPayToken?: string | null
          bankAccountDetails?: string | null
          bankAccountName?: string | null
          bankAccountNumber?: string | null
          bankBranch?: string | null
          bankIban?: string | null
          bankName?: string | null
          bankSwiftCode?: string | null
          baseMonthlyFee?: number | null
          businessAddress?: string | null
          businessEmail?: string | null
          businessLogoUrl?: string | null
          businessRegistrationNumber?: string | null
          commissionPercentage?: number | null
          contactPhone?: string | null
          createdAt?: string
          defaultWithdrawalMethod?: string | null
          description?: string | null
          directPayoutEnabled?: boolean | null
          faviconUrl?: string | null
          id?: string
          idNumber?: string | null
          intasendPublishableKey?: string | null
          intasendSecretKey?: string | null
          isGoLiveChecked?: boolean | null
          isProduction?: boolean | null
          lastAutoPayAttemptAt?: string | null
          lastAutoPayStatus?: string | null
          lastSanitizedAt?: string | null
          loginLogoUrl?: string | null
          logoUrl?: string | null
          minimumWithdrawalAmount?: number | null
          mpesaConsumerKey?: string | null
          mpesaConsumerSecret?: string | null
          mpesaEnvironment?: string | null
          mpesaInitiatorName?: string | null
          mpesaInitiatorPassword?: string | null
          mpesaPasskey?: string | null
          mpesaPaybillAccount?: string | null
          mpesaPaybillNumber?: string | null
          mpesaPochiNumber?: string | null
          mpesaShortcode?: string | null
          mpesaTillName?: string | null
          mpesaTillNumber?: string | null
          mpesaWebhookSecret?: string | null
          mpesaWithdrawalName?: string | null
          mpesaWithdrawalNumber?: string | null
          name?: string
          nextPaymentDueDate?: string | null
          notificationPreferences?: string | null
          paybillAccountNumber?: string | null
          payoutMethod?: string | null
          portalLogoUrl?: string | null
          primaryColor?: string | null
          productionReadyAt?: string | null
          secondaryColor?: string | null
          settlementMethod?: string | null
          settlementSchedule?: string | null
          smsFee?: number | null
          status?: Database["public"]["Enums"]["enum_tenants_status"] | null
          storeName?: string | null
          subdomain?: string
          subscriptionExpiry?: string | null
          subscriptionStatus?: string | null
          supportEmail?: string | null
          supportPhone?: string | null
          taxPin?: string | null
          themeColor?: string | null
          themePreference?:
            | Database["public"]["Enums"]["enum_tenants_themePreference"]
            | null
          tradingName?: string | null
          transactionFee?: number | null
          trialEndsAt?: string | null
          updatedAt?: string
          vatNumber?: string | null
          website?: string | null
          withdrawalVerificationMethod?:
            | Database["public"]["Enums"]["enum_tenants_withdrawalVerificationMethod"]
            | null
        }
        Relationships: []
      }
      test_account_seeds: {
        Row: {
          createdAt: string
          description: string
          email: string
          id: string
          phoneNumber: string | null
          role: Database["public"]["Enums"]["enum_test_account_seeds_role"]
          tenantId: string | null
          updatedAt: string
        }
        Insert: {
          createdAt: string
          description: string
          email: string
          id: string
          phoneNumber?: string | null
          role: Database["public"]["Enums"]["enum_test_account_seeds_role"]
          tenantId?: string | null
          updatedAt: string
        }
        Update: {
          createdAt?: string
          description?: string
          email?: string
          id?: string
          phoneNumber?: string | null
          role?: Database["public"]["Enums"]["enum_test_account_seeds_role"]
          tenantId?: string | null
          updatedAt?: string
        }
        Relationships: []
      }
      tieredFees: {
        Row: {
          createdAt: string
          feeValue: number
          id: string
          isPercentage: boolean | null
          maxAmount: number | null
          minAmount: number | null
          platformFeeId: string
          updatedAt: string
        }
        Insert: {
          createdAt: string
          feeValue: number
          id: string
          isPercentage?: boolean | null
          maxAmount?: number | null
          minAmount?: number | null
          platformFeeId: string
          updatedAt: string
        }
        Update: {
          createdAt?: string
          feeValue?: number
          id?: string
          isPercentage?: boolean | null
          maxAmount?: number | null
          minAmount?: number | null
          platformFeeId?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "tieredFees_platformFeeId_fkey"
            columns: ["platformFeeId"]
            isOneToOne: false
            referencedRelation: "platformFees"
            referencedColumns: ["id"]
          },
        ]
      }
      transactions: {
        Row: {
          account_reference: string | null
          amount: number
          api_key_id: string | null
          checkout_request_id: string | null
          created_at: string
          description: string | null
          id: string
          merchant_request_id: string | null
          mpesa_receipt: string | null
          phone: string
          result_code: string | null
          result_desc: string | null
          shortcode: string | null
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          account_reference?: string | null
          amount: number
          api_key_id?: string | null
          checkout_request_id?: string | null
          created_at?: string
          description?: string | null
          id?: string
          merchant_request_id?: string | null
          mpesa_receipt?: string | null
          phone: string
          result_code?: string | null
          result_desc?: string | null
          shortcode?: string | null
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          account_reference?: string | null
          amount?: number
          api_key_id?: string | null
          checkout_request_id?: string | null
          created_at?: string
          description?: string | null
          id?: string
          merchant_request_id?: string | null
          mpesa_receipt?: string | null
          phone?: string
          result_code?: string | null
          result_desc?: string | null
          shortcode?: string | null
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "transactions_api_key_id_fkey"
            columns: ["api_key_id"]
            isOneToOne: false
            referencedRelation: "api_keys"
            referencedColumns: ["id"]
          },
        ]
      }
      trial_agreements: {
        Row: {
          agreedAt: string | null
          agreedIp: string
          agreedTextHash: string
          agreedUserAgent: string
          businessLocation: string
          businessName: string
          createdAt: string
          email: string
          expectedRouterCount: number | null
          expectedSubscriberCount: number | null
          id: string
          ownerName: string
          phone: string
          tenantId: string
          termsAccepted: boolean | null
          trialAgreementAccepted: boolean | null
          updatedAt: string
        }
        Insert: {
          agreedAt?: string | null
          agreedIp: string
          agreedTextHash: string
          agreedUserAgent: string
          businessLocation: string
          businessName: string
          createdAt: string
          email: string
          expectedRouterCount?: number | null
          expectedSubscriberCount?: number | null
          id: string
          ownerName: string
          phone: string
          tenantId: string
          termsAccepted?: boolean | null
          trialAgreementAccepted?: boolean | null
          updatedAt: string
        }
        Update: {
          agreedAt?: string | null
          agreedIp?: string
          agreedTextHash?: string
          agreedUserAgent?: string
          businessLocation?: string
          businessName?: string
          createdAt?: string
          email?: string
          expectedRouterCount?: number | null
          expectedSubscriberCount?: number | null
          id?: string
          ownerName?: string
          phone?: string
          tenantId?: string
          termsAccepted?: boolean | null
          trialAgreementAccepted?: boolean | null
          updatedAt?: string
        }
        Relationships: []
      }
      user_presence: {
        Row: {
          last_seen: string
          peer_id: string
          status: string | null
          user_email: string
          user_id: string
          user_name: string
        }
        Insert: {
          last_seen?: string
          peer_id: string
          status?: string | null
          user_email: string
          user_id: string
          user_name: string
        }
        Update: {
          last_seen?: string
          peer_id?: string
          status?: string | null
          user_email?: string
          user_id?: string
          user_name?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      user_sessions: {
        Row: {
          created_at: string
          expires_at: string
          id: string
          token: string
          user_id: string
        }
        Insert: {
          created_at?: string
          expires_at?: string
          id?: string
          token: string
          user_id: string
        }
        Update: {
          created_at?: string
          expires_at?: string
          id?: string
          token?: string
          user_id?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          created_at: string | null
          display_name: string
          email: string
          id: string
          last_seen: number | null
          online: boolean | null
          phone_number: string | null
          photo_url: string | null
        }
        Insert: {
          created_at?: string | null
          display_name: string
          email: string
          id?: string
          last_seen?: number | null
          online?: boolean | null
          phone_number?: string | null
          photo_url?: string | null
        }
        Update: {
          created_at?: string | null
          display_name?: string
          email?: string
          id?: string
          last_seen?: number | null
          online?: boolean | null
          phone_number?: string | null
          photo_url?: string | null
        }
        Relationships: []
      }
      vouchers: {
        Row: {
          batch: string | null
          code: string
          createdAt: string
          id: string
          packageId: number
          soldByAgentId: string | null
          status: Database["public"]["Enums"]["enum_vouchers_status"] | null
          tenantId: string
          updatedAt: string
          usedAt: string | null
        }
        Insert: {
          batch?: string | null
          code: string
          createdAt: string
          id: string
          packageId: number
          soldByAgentId?: string | null
          status?: Database["public"]["Enums"]["enum_vouchers_status"] | null
          tenantId: string
          updatedAt: string
          usedAt?: string | null
        }
        Update: {
          batch?: string | null
          code?: string
          createdAt?: string
          id?: string
          packageId?: number
          soldByAgentId?: string | null
          status?: Database["public"]["Enums"]["enum_vouchers_status"] | null
          tenantId?: string
          updatedAt?: string
          usedAt?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "vouchers_packageId_fkey"
            columns: ["packageId"]
            isOneToOne: false
            referencedRelation: "packages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "vouchers_tenantId_fkey"
            columns: ["tenantId"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      wallets: {
        Row: {
          balance: number | null
          createdAt: string
          currency: string | null
          frozenBalance: number | null
          id: string
          ownerId: string
          ownerType: Database["public"]["Enums"]["enum_wallets_ownerType"]
          pendingBalance: number | null
          settledBalance: number | null
          tenantId: string
          updatedAt: string
        }
        Insert: {
          balance?: number | null
          createdAt: string
          currency?: string | null
          frozenBalance?: number | null
          id: string
          ownerId: string
          ownerType: Database["public"]["Enums"]["enum_wallets_ownerType"]
          pendingBalance?: number | null
          settledBalance?: number | null
          tenantId: string
          updatedAt: string
        }
        Update: {
          balance?: number | null
          createdAt?: string
          currency?: string | null
          frozenBalance?: number | null
          id?: string
          ownerId?: string
          ownerType?: Database["public"]["Enums"]["enum_wallets_ownerType"]
          pendingBalance?: number | null
          settledBalance?: number | null
          tenantId?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "wallets_tenantId_fkey"
            columns: ["tenantId"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      walletTransactions: {
        Row: {
          amount: number
          balanceAfter: number
          createdAt: string
          createdBy: string | null
          description: string | null
          destinationWalletId: string | null
          id: string
          maturesAt: string | null
          metadata: string | null
          referenceId: string | null
          referenceType: string | null
          settlementStatus:
            | Database["public"]["Enums"]["enum_walletTransactions_settlementStatus"]
            | null
          sourceWalletId: string | null
          status:
            | Database["public"]["Enums"]["enum_walletTransactions_status"]
            | null
          tenantId: string
          transactionType: Database["public"]["Enums"]["enum_walletTransactions_transactionType"]
          updatedAt: string
          walletId: string
        }
        Insert: {
          amount: number
          balanceAfter: number
          createdAt: string
          createdBy?: string | null
          description?: string | null
          destinationWalletId?: string | null
          id: string
          maturesAt?: string | null
          metadata?: string | null
          referenceId?: string | null
          referenceType?: string | null
          settlementStatus?:
            | Database["public"]["Enums"]["enum_walletTransactions_settlementStatus"]
            | null
          sourceWalletId?: string | null
          status?:
            | Database["public"]["Enums"]["enum_walletTransactions_status"]
            | null
          tenantId: string
          transactionType: Database["public"]["Enums"]["enum_walletTransactions_transactionType"]
          updatedAt: string
          walletId: string
        }
        Update: {
          amount?: number
          balanceAfter?: number
          createdAt?: string
          createdBy?: string | null
          description?: string | null
          destinationWalletId?: string | null
          id?: string
          maturesAt?: string | null
          metadata?: string | null
          referenceId?: string | null
          referenceType?: string | null
          settlementStatus?:
            | Database["public"]["Enums"]["enum_walletTransactions_settlementStatus"]
            | null
          sourceWalletId?: string | null
          status?:
            | Database["public"]["Enums"]["enum_walletTransactions_status"]
            | null
          tenantId?: string
          transactionType?: Database["public"]["Enums"]["enum_walletTransactions_transactionType"]
          updatedAt?: string
          walletId?: string
        }
        Relationships: [
          {
            foreignKeyName: "walletTransactions_walletId_fkey"
            columns: ["walletId"]
            isOneToOne: false
            referencedRelation: "wallets"
            referencedColumns: ["id"]
          },
        ]
      }
      wifi_packages: {
        Row: {
          badge: string | null
          created_at: string | null
          description: string | null
          download_mbps: number
          duration_minutes: number
          id: string
          name: string
          popular: boolean | null
          price: number
          upload_mbps: number
        }
        Insert: {
          badge?: string | null
          created_at?: string | null
          description?: string | null
          download_mbps: number
          duration_minutes: number
          id: string
          name: string
          popular?: boolean | null
          price: number
          upload_mbps: number
        }
        Update: {
          badge?: string | null
          created_at?: string | null
          description?: string | null
          download_mbps?: number
          duration_minutes?: number
          id?: string
          name?: string
          popular?: boolean | null
          price?: number
          upload_mbps?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      claim_super_admin: { Args: never; Returns: boolean }
      extend_pass_time: {
        Args: { extra_hours: number; log_id: string }
        Returns: undefined
      }
      get_admin_count: { Args: never; Returns: number }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "user"
      enum_ad_analytics_eventType:
        | "IMPRESSION"
        | "VIEW"
        | "UNIQUE_VIEW"
        | "CLICK"
        | "VIDEO_COMPLETE"
        | "CONVERSION"
      enum_ad_campaigns_approvalStatus: "PENDING" | "APPROVED" | "REJECTED"
      enum_ad_campaigns_campaignType:
        | "IMAGE_BANNER"
        | "VIDEO_AD"
        | "CAROUSEL"
        | "POPUP"
        | "FULLSCREEN_SPLASH"
        | "HTML_AD"
        | "GIF_AD"
        | "TEXT_ANNOUNCEMENT"
        | "SCROLLING_MARQUEE"
        | "COUPON_CARD"
        | "QR_PROMOTION"
        | "COUNTDOWN_PROMOTION"
      enum_ad_campaigns_ctaType:
        | "VISIT_WEBSITE"
        | "BUY_NOW"
        | "CALL_NOW"
        | "WHATSAPP"
        | "MESSENGER"
        | "DOWNLOAD_APP"
        | "LEARN_MORE"
        | "REDEEM_COUPON"
        | "OPEN_MAPS"
      enum_ad_campaigns_rotationType:
        | "SINGLE"
        | "RANDOM"
        | "PRIORITY"
        | "WEIGHTED"
        | "SEQUENTIAL"
      enum_ad_campaigns_status:
        | "DRAFT"
        | "SCHEDULED"
        | "RUNNING"
        | "PAUSED"
        | "EXPIRED"
        | "APPROVED"
        | "REJECTED"
        | "SUSPENDED"
      enum_admin_users_role:
        | "PLATFORM_OWNER"
        | "SUPER_ADMIN"
        | "TENANT"
        | "STAFF"
        | "AGENT"
      enum_admin_users_themePreference: "light" | "dark" | "system"
      enum_adminSessions_status: "ACTIVE" | "EXPIRED" | "REVOKED"
      enum_campaignLogs_status:
        | "PENDING"
        | "SENT"
        | "DELIVERED"
        | "READ"
        | "FAILED"
      enum_campaigns_status: "DRAFT" | "SENDING" | "COMPLETED" | "FAILED"
      enum_campaigns_type: "EMAIL" | "SMS" | "WHATSAPP" | "BOTH"
      enum_compensation_rules_compensationType:
        | "PACKAGE_EXTENSION"
        | "WALLET_CREDIT"
        | "FREE_DATA"
      enum_compensation_rules_triggerType:
        | "ROUTER_DOWNTIME"
        | "HOTSPOT_OUTAGE"
        | "AUTH_FAILURES"
        | "CUSTOM"
      enum_device_bindings_bindingType: "BYPASSED" | "BLOCKED" | "REGULAR"
      enum_device_bindings_deviceType: "SMARTPHONE" | "TV" | "LAPTOP" | "OTHER"
      enum_dormantRouterPolicies_actionOnDormant:
        | "ALERT_ONLY"
        | "SUSPEND_ROUTER"
        | "DISABLE_SYNC"
        | "RECONNECT_ATTEMPT"
      enum_enterprise_leads_status:
        | "NEW"
        | "CONTACTED"
        | "QUALIFICATION"
        | "PROPOSAL_SENT"
        | "NEGOTIATION"
        | "AWAITING_APPROVAL"
        | "WON"
        | "LOST"
        | "ARCHIVED"
      enum_enterprise_quotes_status:
        | "DRAFT"
        | "SENT"
        | "ACCEPTED"
        | "REJECTED"
        | "CHANGES_REQUESTED"
        | "EXPIRED"
      enum_invoices_status: "UNPAID" | "PAID" | "CANCELLED"
      enum_marketing_coupons_discountType:
        | "PERCENTAGE"
        | "FIXED_AMOUNT"
        | "FREE_PACKAGE"
      enum_marketing_coupons_status: "ACTIVE" | "EXPIRED" | "EXHAUSTED"
      enum_marketing_landing_pages_status: "DRAFT" | "PUBLISHED"
      enum_media_items_fileType:
        | "IMAGE"
        | "VIDEO"
        | "GIF"
        | "PDF"
        | "LOGO"
        | "ICON"
      enum_messageTemplates_channel: "EMAIL" | "SMS" | "WHATSAPP"
      enum_messageTemplates_status:
        | "DRAFT"
        | "PENDING"
        | "APPROVED"
        | "REJECTED"
      enum_mpesa_payment_tokens_status:
        | "ACTIVE"
        | "REVOKED"
        | "EXPIRED"
        | "FAILED"
      enum_nas_status: "ACTIVE" | "INACTIVE" | "MAINTENANCE"
      enum_packages_expiryAction: "SUSPEND" | "DELETE" | "NOTIFY"
      enum_packages_type: "HOTSPOT" | "ISP"
      enum_passwordResetTokens_resetType: "LINK" | "OTP"
      enum_payment_status: "PENDING" | "SUCCESS" | "FAILED" | "REVERSED"
      enum_platform_transactions_type:
        | "FEE_SUBSCRIPTION"
        | "FEE_TRANSACTION"
        | "FEE_SMS"
        | "COMMISSION"
      enum_qr_campaigns_destinationType:
        | "WEBSITE"
        | "PACKAGE_PURCHASE"
        | "WHATSAPP"
        | "PAYMENT"
        | "LOCATION"
        | "PROMOTION"
      enum_radius_policies_authType: "PAP" | "CHAP" | "MSCHAPv2" | "EAP" | "MAC"
      enum_radius_policies_fallbackAction:
        | "REJECT"
        | "ACCEPT_GUEST"
        | "REDIRECT_PORTAL"
      enum_refund_requests_category:
        | "NETWORK_OUTAGE"
        | "ROUTER_FAILURE"
        | "POWER_FAILURE"
        | "PAYMENT_FAILURE"
        | "AUTH_FAILURE"
        | "SLOW_INTERNET"
        | "MAINTENANCE"
        | "GOODWILL"
        | "CUSTOM"
      enum_refund_requests_providerRefundStatus:
        | "REQUESTED"
        | "PROCESSING"
        | "COMPLETED"
        | "FAILED"
        | "CANCELLED"
      enum_refund_requests_status:
        | "DRAFT"
        | "SUBMITTED"
        | "APPROVED"
        | "REJECTED"
        | "COMPLETED"
        | "CANCELLED"
      enum_refund_requests_type:
        | "FULL_REFUND"
        | "PARTIAL_REFUND"
        | "WALLET_CREDIT"
        | "PACKAGE_EXTENSION"
        | "VOUCHER_REPLACEMENT"
        | "FREE_DATA"
        | "MANUAL_COMPENSATION"
        | "GOODWILL_CREDIT"
      enum_router_connection_logs_action:
        | "CONNECT"
        | "VERIFY"
        | "DISCONNECT"
        | "TEST"
        | "SYNC"
        | "ERROR"
      enum_router_connection_logs_status: "SUCCESS" | "FAILED" | "PENDING"
      enum_router_incidents_incidentType:
        | "POWER_OUTAGE"
        | "BLACKOUT"
        | "MAINTENANCE"
        | "NETWORK_FAILURE"
        | "HARDWARE_FAILURE"
        | "UPSTREAM_FAILURE"
      enum_router_incidents_severity:
        | "INFO"
        | "WARNING"
        | "CRITICAL"
        | "EMERGENCY"
      enum_router_incidents_status:
        | "OPEN"
        | "SCHEDULED"
        | "IN_PROGRESS"
        | "RESOLVED"
        | "CANCELLED"
      enum_routerConnectionLogs_action:
        | "CONNECT"
        | "VERIFY"
        | "DISCONNECT"
        | "TEST"
        | "SYNC"
        | "ERROR"
      enum_routerConnectionLogs_status: "SUCCESS" | "FAILED" | "PENDING"
      enum_routers_autoConfigStatus: "PENDING" | "CONFIGURED" | "FAILED"
      enum_routers_maintenanceStatus:
        | "OPERATIONAL"
        | "MAINTENANCE"
        | "POWER_OUTAGE"
        | "BLACKOUT"
        | "NETWORK_FAILURE"
        | "HARDWARE_FAILURE"
        | "UPSTREAM_FAILURE"
      enum_routers_powerStatus: "GRID" | "UPS_BATTERY" | "OFFLINE" | "UNKNOWN"
      enum_routers_smartPowerType:
        | "SMART_PDU"
        | "SMART_UPS"
        | "SMART_PLUG"
        | "REMOTE_SWITCH"
        | "NONE"
      enum_routers_validationStatus: "PENDING" | "VALIDATED" | "FAILED"
      enum_saas_invoice_items_category:
        | "SUBSCRIPTION"
        | "USAGE"
        | "ADVERTISING"
        | "SMS"
        | "EMAIL"
        | "WHATSAPP"
        | "ADDON"
        | "TAX"
        | "DISCOUNT"
        | "LATE_FEE"
      enum_saas_invoices_paymentStatus:
        | "UNPAID"
        | "PAID"
        | "OVERDUE"
        | "FAILED"
        | "CANCELLED"
      enum_saas_notifications_type:
        | "INVOICE_CREATED"
        | "PAYMENT_RECEIVED"
        | "PAYMENT_FAILED"
        | "SUBSCRIPTION_EXPIRING"
        | "SUBSCRIPTION_SUSPENDED"
        | "TRIAL_ENDING"
        | "GRACE_PERIOD_ENDING"
        | "AD_CHARGES_APPLIED"
      enum_saas_payments_gateway: "INTASEND" | "MPESA" | "WALLET"
      enum_saas_payments_status: "PENDING" | "SUCCESS" | "FAILED"
      enum_saas_subscription_payments_status: "PENDING" | "SUCCESS" | "FAILED"
      enum_sandbox_message_logs_channel: "EMAIL" | "SMS" | "WHATSAPP"
      enum_sandbox_message_logs_status: "CAPTURED" | "SIMULATED" | "FAILED"
      enum_sandbox_payment_logs_provider: "WALLET" | "INTASEND" | "MPESA"
      enum_sandbox_payment_logs_status:
        | "SUCCESS"
        | "FAILED"
        | "TIMEOUT"
        | "DUPLICATE"
      enum_sandbox_payment_logs_transactionType:
        | "PAYMENT"
        | "REFUND"
        | "CREDIT_PURCHASE"
      enum_sessions_status: "ACTIVE" | "EXPIRED"
      enum_settlements_status: "PENDING" | "PAID" | "FAILED" | "REVERSED"
      enum_sms_campaign_messages_status:
        | "PENDING"
        | "SENT"
        | "DELIVERED"
        | "FAILED"
      enum_sms_gateways_provider:
        | "TALKSASA"
        | "AFRICASTALKING"
        | "INFOBIP"
        | "VONAGE"
        | "TWILIO"
        | "GENERIC"
      enum_sms_ledger_transactions_transactionType:
        | "TENANT_PAYMENT"
        | "PROFIT_RESERVED"
        | "PROCUREMENT_DEBIT"
        | "PROFIT_RELEASE"
        | "PROCUREMENT_REFUND"
      enum_sms_logs_status: "SENT" | "FAILED" | "PENDING"
      enum_sms_packages_status: "ACTIVE" | "INACTIVE"
      enum_sms_procurement_tasks_executionMode:
        | "API"
        | "AUTOMATED_PROCUREMENT_SERVICE"
      enum_sms_procurement_tasks_procurementStatus:
        | "PENDING"
        | "IN_PROGRESS"
        | "COMPLETED"
        | "VERIFICATION_FAILED"
        | "FAILED"
        | "RETRYING"
      enum_sms_transactions_paymentMethod: "WALLET" | "INTASEND" | "MPESA"
      enum_sms_transactions_status:
        | "PENDING"
        | "COMPLETED"
        | "FAILED"
        | "REFUNDED"
      enum_staging_error_logs_severity:
        | "INFO"
        | "WARNING"
        | "ERROR"
        | "CRITICAL"
      enum_staging_error_logs_source:
        | "FRONTEND"
        | "BACKEND"
        | "API"
        | "PAYMENT"
        | "DATABASE"
        | "ROUTER"
        | "EMAIL"
        | "SMS"
        | "WHATSAPP"
      enum_subscribers_connectionType: "HOTSPOT" | "PPPOE"
      enum_subscribers_customerType:
        | "RESIDENTIAL"
        | "BUSINESS"
        | "CORPORATE"
        | "INSTITUTION"
        | "HOTSPOT"
        | "PPPOE"
      enum_subscribers_status: "ACTIVE" | "INACTIVE" | "SUSPENDED"
      enum_subscription_plans_supportLevel:
        | "COMMUNITY"
        | "STANDARD"
        | "PRIORITY"
        | "DEDICATED"
      enum_tenant_addon_modules_moduleName:
        | "ADVERTISING"
        | "SMS"
        | "WHATSAPP"
        | "EMAIL"
        | "ADVANCED_ANALYTICS"
        | "API_ACCESS"
        | "WHITE_LABEL"
        | "EXTRA_ROUTERS"
        | "CUSTOM_DOMAINS"
        | "BACKUPS"
      enum_tenant_addon_modules_status:
        | "ACTIVE"
        | "TRIAL"
        | "EXPIRED"
        | "DISABLED"
      enum_tenant_captive_portal_brandings_backgroundType:
        | "IMAGE"
        | "VIDEO"
        | "GRADIENT"
        | "SOLID"
      enum_tenant_captive_portal_brandings_packageCardLayout:
        | "GRID_2COL"
        | "GRID_3COL"
        | "VERTICAL_LIST"
        | "COMPACT_TILES"
        | "HORIZONTAL_SCROLL"
      enum_tenant_captive_portal_brandings_packageCardStyle:
        | "GLASS"
        | "SOLID"
        | "OUTLINE"
        | "GRADIENT_ACCENT"
      enum_tenant_documents_docType:
        | "BUSINESS_CERT"
        | "TAX_PIN_CERT"
        | "NATIONAL_ID"
        | "BANK_LETTER"
        | "UTILITY_BILL"
      enum_tenant_documents_status: "PENDING" | "VERIFIED" | "REJECTED"
      enum_tenant_subscriptions_billingCycle: "MONTHLY" | "YEARLY"
      enum_tenant_subscriptions_status:
        | "FREE_TRIAL"
        | "PENDING_PAYMENT"
        | "ACTIVE"
        | "GRACE_PERIOD"
        | "SUSPENDED"
        | "EXPIRED"
        | "CANCELLED"
        | "ARCHIVED"
        | "TRIAL"
        | "OVERDUE"
      enum_tenant_withdrawals_method: "MPESA" | "BANK"
      enum_tenant_withdrawals_status:
        | "PENDING"
        | "COMPLETED"
        | "CANCELLED"
        | "REJECTED"
      enum_tenants_status: "ACTIVE" | "SUSPENDED"
      enum_tenants_subscriptionStatus: "TRIAL" | "PAID" | "EXPIRED" | "GRACE"
      enum_tenants_themePreference: "light" | "dark" | "system"
      enum_tenants_withdrawalVerificationMethod:
        | "OTP_EMAIL"
        | "OTP_SMS"
        | "NONE"
      enum_test_account_seeds_role:
        | "SUPER_ADMIN"
        | "TENANT"
        | "STAFF"
        | "AGENT"
        | "CUSTOMER"
      enum_vouchers_status: "AVAILABLE" | "USED" | "EXPIRED"
      enum_wallets_ownerType: "SUBSCRIBER" | "TENANT" | "AGENT"
      enum_walletTransactions_settlementStatus: "PENDING" | "SETTLED" | "NA"
      enum_walletTransactions_status:
        | "PENDING"
        | "COMPLETED"
        | "FAILED"
        | "REVERSED"
      enum_walletTransactions_transactionType:
        | "CREDIT"
        | "DEBIT"
        | "FEE"
        | "SETTLEMENT"
        | "REVERSAL"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user"],
      enum_ad_analytics_eventType: [
        "IMPRESSION",
        "VIEW",
        "UNIQUE_VIEW",
        "CLICK",
        "VIDEO_COMPLETE",
        "CONVERSION",
      ],
      enum_ad_campaigns_approvalStatus: ["PENDING", "APPROVED", "REJECTED"],
      enum_ad_campaigns_campaignType: [
        "IMAGE_BANNER",
        "VIDEO_AD",
        "CAROUSEL",
        "POPUP",
        "FULLSCREEN_SPLASH",
        "HTML_AD",
        "GIF_AD",
        "TEXT_ANNOUNCEMENT",
        "SCROLLING_MARQUEE",
        "COUPON_CARD",
        "QR_PROMOTION",
        "COUNTDOWN_PROMOTION",
      ],
      enum_ad_campaigns_ctaType: [
        "VISIT_WEBSITE",
        "BUY_NOW",
        "CALL_NOW",
        "WHATSAPP",
        "MESSENGER",
        "DOWNLOAD_APP",
        "LEARN_MORE",
        "REDEEM_COUPON",
        "OPEN_MAPS",
      ],
      enum_ad_campaigns_rotationType: [
        "SINGLE",
        "RANDOM",
        "PRIORITY",
        "WEIGHTED",
        "SEQUENTIAL",
      ],
      enum_ad_campaigns_status: [
        "DRAFT",
        "SCHEDULED",
        "RUNNING",
        "PAUSED",
        "EXPIRED",
        "APPROVED",
        "REJECTED",
        "SUSPENDED",
      ],
      enum_admin_users_role: [
        "PLATFORM_OWNER",
        "SUPER_ADMIN",
        "TENANT",
        "STAFF",
        "AGENT",
      ],
      enum_admin_users_themePreference: ["light", "dark", "system"],
      enum_adminSessions_status: ["ACTIVE", "EXPIRED", "REVOKED"],
      enum_campaignLogs_status: [
        "PENDING",
        "SENT",
        "DELIVERED",
        "READ",
        "FAILED",
      ],
      enum_campaigns_status: ["DRAFT", "SENDING", "COMPLETED", "FAILED"],
      enum_campaigns_type: ["EMAIL", "SMS", "WHATSAPP", "BOTH"],
      enum_compensation_rules_compensationType: [
        "PACKAGE_EXTENSION",
        "WALLET_CREDIT",
        "FREE_DATA",
      ],
      enum_compensation_rules_triggerType: [
        "ROUTER_DOWNTIME",
        "HOTSPOT_OUTAGE",
        "AUTH_FAILURES",
        "CUSTOM",
      ],
      enum_device_bindings_bindingType: ["BYPASSED", "BLOCKED", "REGULAR"],
      enum_device_bindings_deviceType: ["SMARTPHONE", "TV", "LAPTOP", "OTHER"],
      enum_dormantRouterPolicies_actionOnDormant: [
        "ALERT_ONLY",
        "SUSPEND_ROUTER",
        "DISABLE_SYNC",
        "RECONNECT_ATTEMPT",
      ],
      enum_enterprise_leads_status: [
        "NEW",
        "CONTACTED",
        "QUALIFICATION",
        "PROPOSAL_SENT",
        "NEGOTIATION",
        "AWAITING_APPROVAL",
        "WON",
        "LOST",
        "ARCHIVED",
      ],
      enum_enterprise_quotes_status: [
        "DRAFT",
        "SENT",
        "ACCEPTED",
        "REJECTED",
        "CHANGES_REQUESTED",
        "EXPIRED",
      ],
      enum_invoices_status: ["UNPAID", "PAID", "CANCELLED"],
      enum_marketing_coupons_discountType: [
        "PERCENTAGE",
        "FIXED_AMOUNT",
        "FREE_PACKAGE",
      ],
      enum_marketing_coupons_status: ["ACTIVE", "EXPIRED", "EXHAUSTED"],
      enum_marketing_landing_pages_status: ["DRAFT", "PUBLISHED"],
      enum_media_items_fileType: [
        "IMAGE",
        "VIDEO",
        "GIF",
        "PDF",
        "LOGO",
        "ICON",
      ],
      enum_messageTemplates_channel: ["EMAIL", "SMS", "WHATSAPP"],
      enum_messageTemplates_status: [
        "DRAFT",
        "PENDING",
        "APPROVED",
        "REJECTED",
      ],
      enum_mpesa_payment_tokens_status: [
        "ACTIVE",
        "REVOKED",
        "EXPIRED",
        "FAILED",
      ],
      enum_nas_status: ["ACTIVE", "INACTIVE", "MAINTENANCE"],
      enum_packages_expiryAction: ["SUSPEND", "DELETE", "NOTIFY"],
      enum_packages_type: ["HOTSPOT", "ISP"],
      enum_passwordResetTokens_resetType: ["LINK", "OTP"],
      enum_payment_status: ["PENDING", "SUCCESS", "FAILED", "REVERSED"],
      enum_platform_transactions_type: [
        "FEE_SUBSCRIPTION",
        "FEE_TRANSACTION",
        "FEE_SMS",
        "COMMISSION",
      ],
      enum_qr_campaigns_destinationType: [
        "WEBSITE",
        "PACKAGE_PURCHASE",
        "WHATSAPP",
        "PAYMENT",
        "LOCATION",
        "PROMOTION",
      ],
      enum_radius_policies_authType: ["PAP", "CHAP", "MSCHAPv2", "EAP", "MAC"],
      enum_radius_policies_fallbackAction: [
        "REJECT",
        "ACCEPT_GUEST",
        "REDIRECT_PORTAL",
      ],
      enum_refund_requests_category: [
        "NETWORK_OUTAGE",
        "ROUTER_FAILURE",
        "POWER_FAILURE",
        "PAYMENT_FAILURE",
        "AUTH_FAILURE",
        "SLOW_INTERNET",
        "MAINTENANCE",
        "GOODWILL",
        "CUSTOM",
      ],
      enum_refund_requests_providerRefundStatus: [
        "REQUESTED",
        "PROCESSING",
        "COMPLETED",
        "FAILED",
        "CANCELLED",
      ],
      enum_refund_requests_status: [
        "DRAFT",
        "SUBMITTED",
        "APPROVED",
        "REJECTED",
        "COMPLETED",
        "CANCELLED",
      ],
      enum_refund_requests_type: [
        "FULL_REFUND",
        "PARTIAL_REFUND",
        "WALLET_CREDIT",
        "PACKAGE_EXTENSION",
        "VOUCHER_REPLACEMENT",
        "FREE_DATA",
        "MANUAL_COMPENSATION",
        "GOODWILL_CREDIT",
      ],
      enum_router_connection_logs_action: [
        "CONNECT",
        "VERIFY",
        "DISCONNECT",
        "TEST",
        "SYNC",
        "ERROR",
      ],
      enum_router_connection_logs_status: ["SUCCESS", "FAILED", "PENDING"],
      enum_router_incidents_incidentType: [
        "POWER_OUTAGE",
        "BLACKOUT",
        "MAINTENANCE",
        "NETWORK_FAILURE",
        "HARDWARE_FAILURE",
        "UPSTREAM_FAILURE",
      ],
      enum_router_incidents_severity: [
        "INFO",
        "WARNING",
        "CRITICAL",
        "EMERGENCY",
      ],
      enum_router_incidents_status: [
        "OPEN",
        "SCHEDULED",
        "IN_PROGRESS",
        "RESOLVED",
        "CANCELLED",
      ],
      enum_routerConnectionLogs_action: [
        "CONNECT",
        "VERIFY",
        "DISCONNECT",
        "TEST",
        "SYNC",
        "ERROR",
      ],
      enum_routerConnectionLogs_status: ["SUCCESS", "FAILED", "PENDING"],
      enum_routers_autoConfigStatus: ["PENDING", "CONFIGURED", "FAILED"],
      enum_routers_maintenanceStatus: [
        "OPERATIONAL",
        "MAINTENANCE",
        "POWER_OUTAGE",
        "BLACKOUT",
        "NETWORK_FAILURE",
        "HARDWARE_FAILURE",
        "UPSTREAM_FAILURE",
      ],
      enum_routers_powerStatus: ["GRID", "UPS_BATTERY", "OFFLINE", "UNKNOWN"],
      enum_routers_smartPowerType: [
        "SMART_PDU",
        "SMART_UPS",
        "SMART_PLUG",
        "REMOTE_SWITCH",
        "NONE",
      ],
      enum_routers_validationStatus: ["PENDING", "VALIDATED", "FAILED"],
      enum_saas_invoice_items_category: [
        "SUBSCRIPTION",
        "USAGE",
        "ADVERTISING",
        "SMS",
        "EMAIL",
        "WHATSAPP",
        "ADDON",
        "TAX",
        "DISCOUNT",
        "LATE_FEE",
      ],
      enum_saas_invoices_paymentStatus: [
        "UNPAID",
        "PAID",
        "OVERDUE",
        "FAILED",
        "CANCELLED",
      ],
      enum_saas_notifications_type: [
        "INVOICE_CREATED",
        "PAYMENT_RECEIVED",
        "PAYMENT_FAILED",
        "SUBSCRIPTION_EXPIRING",
        "SUBSCRIPTION_SUSPENDED",
        "TRIAL_ENDING",
        "GRACE_PERIOD_ENDING",
        "AD_CHARGES_APPLIED",
      ],
      enum_saas_payments_gateway: ["INTASEND", "MPESA", "WALLET"],
      enum_saas_payments_status: ["PENDING", "SUCCESS", "FAILED"],
      enum_saas_subscription_payments_status: ["PENDING", "SUCCESS", "FAILED"],
      enum_sandbox_message_logs_channel: ["EMAIL", "SMS", "WHATSAPP"],
      enum_sandbox_message_logs_status: ["CAPTURED", "SIMULATED", "FAILED"],
      enum_sandbox_payment_logs_provider: ["WALLET", "INTASEND", "MPESA"],
      enum_sandbox_payment_logs_status: [
        "SUCCESS",
        "FAILED",
        "TIMEOUT",
        "DUPLICATE",
      ],
      enum_sandbox_payment_logs_transactionType: [
        "PAYMENT",
        "REFUND",
        "CREDIT_PURCHASE",
      ],
      enum_sessions_status: ["ACTIVE", "EXPIRED"],
      enum_settlements_status: ["PENDING", "PAID", "FAILED", "REVERSED"],
      enum_sms_campaign_messages_status: [
        "PENDING",
        "SENT",
        "DELIVERED",
        "FAILED",
      ],
      enum_sms_gateways_provider: [
        "TALKSASA",
        "AFRICASTALKING",
        "INFOBIP",
        "VONAGE",
        "TWILIO",
        "GENERIC",
      ],
      enum_sms_ledger_transactions_transactionType: [
        "TENANT_PAYMENT",
        "PROFIT_RESERVED",
        "PROCUREMENT_DEBIT",
        "PROFIT_RELEASE",
        "PROCUREMENT_REFUND",
      ],
      enum_sms_logs_status: ["SENT", "FAILED", "PENDING"],
      enum_sms_packages_status: ["ACTIVE", "INACTIVE"],
      enum_sms_procurement_tasks_executionMode: [
        "API",
        "AUTOMATED_PROCUREMENT_SERVICE",
      ],
      enum_sms_procurement_tasks_procurementStatus: [
        "PENDING",
        "IN_PROGRESS",
        "COMPLETED",
        "VERIFICATION_FAILED",
        "FAILED",
        "RETRYING",
      ],
      enum_sms_transactions_paymentMethod: ["WALLET", "INTASEND", "MPESA"],
      enum_sms_transactions_status: [
        "PENDING",
        "COMPLETED",
        "FAILED",
        "REFUNDED",
      ],
      enum_staging_error_logs_severity: [
        "INFO",
        "WARNING",
        "ERROR",
        "CRITICAL",
      ],
      enum_staging_error_logs_source: [
        "FRONTEND",
        "BACKEND",
        "API",
        "PAYMENT",
        "DATABASE",
        "ROUTER",
        "EMAIL",
        "SMS",
        "WHATSAPP",
      ],
      enum_subscribers_connectionType: ["HOTSPOT", "PPPOE"],
      enum_subscribers_customerType: [
        "RESIDENTIAL",
        "BUSINESS",
        "CORPORATE",
        "INSTITUTION",
        "HOTSPOT",
        "PPPOE",
      ],
      enum_subscribers_status: ["ACTIVE", "INACTIVE", "SUSPENDED"],
      enum_subscription_plans_supportLevel: [
        "COMMUNITY",
        "STANDARD",
        "PRIORITY",
        "DEDICATED",
      ],
      enum_tenant_addon_modules_moduleName: [
        "ADVERTISING",
        "SMS",
        "WHATSAPP",
        "EMAIL",
        "ADVANCED_ANALYTICS",
        "API_ACCESS",
        "WHITE_LABEL",
        "EXTRA_ROUTERS",
        "CUSTOM_DOMAINS",
        "BACKUPS",
      ],
      enum_tenant_addon_modules_status: [
        "ACTIVE",
        "TRIAL",
        "EXPIRED",
        "DISABLED",
      ],
      enum_tenant_captive_portal_brandings_backgroundType: [
        "IMAGE",
        "VIDEO",
        "GRADIENT",
        "SOLID",
      ],
      enum_tenant_captive_portal_brandings_packageCardLayout: [
        "GRID_2COL",
        "GRID_3COL",
        "VERTICAL_LIST",
        "COMPACT_TILES",
        "HORIZONTAL_SCROLL",
      ],
      enum_tenant_captive_portal_brandings_packageCardStyle: [
        "GLASS",
        "SOLID",
        "OUTLINE",
        "GRADIENT_ACCENT",
      ],
      enum_tenant_documents_docType: [
        "BUSINESS_CERT",
        "TAX_PIN_CERT",
        "NATIONAL_ID",
        "BANK_LETTER",
        "UTILITY_BILL",
      ],
      enum_tenant_documents_status: ["PENDING", "VERIFIED", "REJECTED"],
      enum_tenant_subscriptions_billingCycle: ["MONTHLY", "YEARLY"],
      enum_tenant_subscriptions_status: [
        "FREE_TRIAL",
        "PENDING_PAYMENT",
        "ACTIVE",
        "GRACE_PERIOD",
        "SUSPENDED",
        "EXPIRED",
        "CANCELLED",
        "ARCHIVED",
        "TRIAL",
        "OVERDUE",
      ],
      enum_tenant_withdrawals_method: ["MPESA", "BANK"],
      enum_tenant_withdrawals_status: [
        "PENDING",
        "COMPLETED",
        "CANCELLED",
        "REJECTED",
      ],
      enum_tenants_status: ["ACTIVE", "SUSPENDED"],
      enum_tenants_subscriptionStatus: ["TRIAL", "PAID", "EXPIRED", "GRACE"],
      enum_tenants_themePreference: ["light", "dark", "system"],
      enum_tenants_withdrawalVerificationMethod: [
        "OTP_EMAIL",
        "OTP_SMS",
        "NONE",
      ],
      enum_test_account_seeds_role: [
        "SUPER_ADMIN",
        "TENANT",
        "STAFF",
        "AGENT",
        "CUSTOMER",
      ],
      enum_vouchers_status: ["AVAILABLE", "USED", "EXPIRED"],
      enum_wallets_ownerType: ["SUBSCRIBER", "TENANT", "AGENT"],
      enum_walletTransactions_settlementStatus: ["PENDING", "SETTLED", "NA"],
      enum_walletTransactions_status: [
        "PENDING",
        "COMPLETED",
        "FAILED",
        "REVERSED",
      ],
      enum_walletTransactions_transactionType: [
        "CREDIT",
        "DEBIT",
        "FEE",
        "SETTLEMENT",
        "REVERSAL",
      ],
    },
  },
} as const
