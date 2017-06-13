export const selectMenuState = state => state.application.get('isMenuOpen')
export const selectUnderMaintenance = state => state.application.get('underMaintenance')
export const selectDataReady = state => state.application.get('dataReady')