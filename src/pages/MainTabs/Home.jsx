import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useAppTheme } from '../../Theme/ThemeContext';

export default function Home({ navigation }) {
  const { colors } = useAppTheme();

  const StatCard = ({ icon, title, value, color }) => (
    <View style={[styles.statCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
      <View style={[styles.iconContainer, { backgroundColor: color + '20' }]}>
        <Icon name={icon} size={28} color={color} />
      </View>
      <Text style={[styles.statValue, { color: colors.text }]}>{value}</Text>
      <Text style={[styles.statTitle, { color: colors.textSecondary }]}>{title}</Text>
    </View>
  );

  const QuickAction = ({ icon, title, description, onPress }) => (
    <TouchableOpacity
      style={[styles.actionCard, { backgroundColor: colors.card, borderColor: colors.border }]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={[styles.actionIcon, { backgroundColor: colors.primary + '15' }]}>
        <Icon name={icon} size={32} color={colors.primary} />
      </View>
      <View style={styles.actionContent}>
        <Text style={[styles.actionTitle, { color: colors.text }]}>{title}</Text>
        <Text style={[styles.actionDescription, { color: colors.textSecondary }]}>
          {description}
        </Text>
      </View>
      <Icon name="chevron-right" size={24} color={colors.textSecondary} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]} edges={['top']}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={[styles.greeting, { color: colors.textSecondary }]}>Welcome back,</Text>
            <Text style={[styles.title, { color: colors.text }]}>Cure Connect</Text>
          </View>
          <TouchableOpacity style={[styles.notificationBtn, { backgroundColor: colors.card }]}>
            <Icon name="bell-outline" size={24} color={colors.text} />
            <View style={[styles.badge, { backgroundColor: colors.error }]} />
          </TouchableOpacity>
        </View>

        {/* Stats Overview */}
        <View style={styles.statsContainer}>
          <StatCard
            icon="account-multiple"
            title="Total Patients"
            value="248"
            color={colors.primary}
          />
          <StatCard
            icon="heart-pulse"
            title="Active Donors"
            value="156"
            color={colors.success}
          />
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Quick Actions</Text>
          
          <QuickAction
            icon="virus"
            title="Disease Prediction"
            description="Predict diseases using ML models"
            onPress={() => navigation.navigate('Disease Match')}
          />
          
          <QuickAction
            icon="dna"
            title="Donor Matching"
            description="HLA-based compatibility scoring"
            onPress={() => navigation.navigate('Donor Match')}
          />
          
          <QuickAction
            icon="database"
            title="Manage Data"
            description="View and update patient/donor records"
            onPress={() => {}}
          />
        </View>

        {/* Recent Activity */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>Recent Activity</Text>
          
          <View style={[styles.activityCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
            <View style={[styles.activityDot, { backgroundColor: colors.success }]} />
            <View style={styles.activityContent}>
              <Text style={[styles.activityTitle, { color: colors.text }]}>
                New prediction completed
              </Text>
              <Text style={[styles.activityTime, { color: colors.textSecondary }]}>
                2 hours ago
              </Text>
            </View>
          </View>

          <View style={[styles.activityCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
            <View style={[styles.activityDot, { backgroundColor: colors.primary }]} />
            <View style={styles.activityContent}>
              <Text style={[styles.activityTitle, { color: colors.text }]}>
                Donor match found (98% compatibility)
              </Text>
              <Text style={[styles.activityTime, { color: colors.textSecondary }]}>
                5 hours ago
              </Text>
            </View>
          </View>
        </View>

        {/* Bottom Padding for Tab Bar */}
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  greeting: {
    fontSize: 14,
    marginBottom: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  notificationBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    alignItems: 'center',
  },
  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  statValue: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  statTitle: {
    fontSize: 12,
    textAlign: 'center',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  actionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 12,
  },
  actionIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  actionContent: {
    flex: 1,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  actionDescription: {
    fontSize: 13,
  },
  activityCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 12,
  },
  activityDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 12,
  },
  activityContent: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  activityTime: {
    fontSize: 12,
  },
});