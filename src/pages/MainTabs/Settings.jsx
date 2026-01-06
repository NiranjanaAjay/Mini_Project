import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Switch, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useAppTheme } from '../../Theme/ThemeContext';

export default function Settings() {
  const { colors, mode, toggleTheme } = useAppTheme();

  const SettingsItem = ({ icon, title, subtitle, onPress, rightElement }) => (
    <TouchableOpacity
      style={[styles.settingsItem, { backgroundColor: colors.card, borderColor: colors.border }]}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={!onPress}
    >
      <View style={[styles.iconBox, { backgroundColor: colors.primary + '15' }]}>
        <Icon name={icon} size={24} color={colors.primary} />
      </View>
      <View style={styles.itemContent}>
        <Text style={[styles.itemTitle, { color: colors.text }]}>{title}</Text>
        {subtitle && (
          <Text style={[styles.itemSubtitle, { color: colors.textSecondary }]}>{subtitle}</Text>
        )}
      </View>
      {rightElement || <Icon name="chevron-right" size={24} color={colors.textSecondary} />}
    </TouchableOpacity>
  );

  const SettingsSection = ({ title, children }) => (
    <View style={styles.section}>
      <Text style={[styles.sectionTitle, { color: colors.textSecondary }]}>{title}</Text>
      {children}
    </View>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]} edges={['top']}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.header}>
          <Text style={[styles.title, { color: colors.text }]}>Settings</Text>
          <Text style={[styles.subtitle, { color: colors.textSecondary }]}>
            Customize your experience
          </Text>
        </View>

        {/* Profile Section */}
        <View style={[styles.profileCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
          <View style={[styles.avatar, { backgroundColor: colors.primary + '20' }]}>
            <Icon name="account" size={40} color={colors.primary} />
          </View>
          <View style={styles.profileInfo}>
            <Text style={[styles.profileName, { color: colors.text }]}>Researcher</Text>
            <Text style={[styles.profileEmail, { color: colors.textSecondary }]}>
              researcher@cureconnect.com
            </Text>
          </View>
          <TouchableOpacity>
            <Icon name="pencil" size={20} color={colors.primary} />
          </TouchableOpacity>
        </View>

        {/* Appearance */}
        <SettingsSection title="APPEARANCE">
          <SettingsItem
            icon="theme-light-dark"
            title="Dark Mode"
            subtitle="Toggle between light and dark theme"
            rightElement={
              <Switch
                value={mode === 'dark'}
                onValueChange={toggleTheme}
                trackColor={{ false: colors.inactive, true: colors.primary }}
                thumbColor="#FFFFFF"
              />
            }
          />
        </SettingsSection>

        {/* Application */}
        <SettingsSection title="APPLICATION">
          <SettingsItem
            icon="database-cog"
            title="Data Management"
            subtitle="Manage patient and donor records"
            onPress={() => {}}
          />
          <SettingsItem
            icon="cloud-sync"
            title="Sync Settings"
            subtitle="Configure data synchronization"
            onPress={() => {}}
          />
          <SettingsItem
            icon="bell-ring"
            title="Notifications"
            subtitle="Manage alerts and notifications"
            onPress={() => {}}
          />
        </SettingsSection>

        {/* Privacy & Security */}
        <SettingsSection title="PRIVACY & SECURITY">
          <SettingsItem
            icon="shield-lock"
            title="Data Encryption"
            subtitle="All data encrypted end-to-end"
            rightElement={
              <Icon name="check-circle" size={24} color={colors.success} />
            }
          />
          <SettingsItem
            icon="account-lock"
            title="Access Control"
            subtitle="Role-based permissions"
            onPress={() => {}}
          />
          <SettingsItem
            icon="file-document-lock"
            title="Research Ethics"
            subtitle="Compliance and privacy policies"
            onPress={() => {}}
          />
        </SettingsSection>

        {/* About */}
        <SettingsSection title="ABOUT">
          <SettingsItem
            icon="information"
            title="App Version"
            subtitle="v1.0.0 (2025-2026)"
            rightElement={null}
          />
          <SettingsItem
            icon="file-document"
            title="Documentation"
            subtitle="View technical specifications"
            onPress={() => {}}
          />
          <SettingsItem
            icon="github"
            title="Open Source"
            subtitle="Model Engineering College"
            onPress={() => {}}
          />
        </SettingsSection>

        {/* Logout */}
        <TouchableOpacity
          style={[styles.logoutButton, { backgroundColor: colors.error + '15', borderColor: colors.error }]}
          activeOpacity={0.7}
        >
          <Icon name="logout" size={20} color={colors.error} />
          <Text style={[styles.logoutText, { color: colors.error }]}>Logout</Text>
        </TouchableOpacity>

        {/* Bottom Padding */}
        <View style={{ height: 100 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 24,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 14,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    marginBottom: 12,
    marginLeft: 4,
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 8,
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  itemContent: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  itemSubtitle: {
    fontSize: 13,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    marginTop: 8,
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});