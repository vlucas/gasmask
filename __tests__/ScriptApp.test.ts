import ScriptApp from '../src/ScriptApp';
import TriggerBuilder from '../src/Triggers/TriggerBuilder';
import ClockTriggerBuilder from '../src/Triggers/ClockTriggerBuilder';

describe('ScriptApp', () => {
  describe('newTrigger', () => {
    it('should create a new TriggerBuilder', () => {
      const actual = ScriptApp.newTrigger('foobar');

      expect(actual).toBeInstanceOf(TriggerBuilder);
    });

    it('should return a new ClockTriggerBuilder with timeBased() triggers', () => {
      const actual = ScriptApp.newTrigger('foobar')
        .timeBased();

      expect(actual).toBeInstanceOf(ClockTriggerBuilder);
    });
  });

  describe('getProjectTriggers', () => {
    it('should return an array of Trigger instances of created triggers', () => {
      const t1 = ScriptApp.newTrigger('foobar').timeBased().create();
      const t2 = ScriptApp.newTrigger('nope_not_real').timeBased().create();
      const triggers = ScriptApp.getProjectTriggers();

      expect(triggers.length).toEqual(2);
    });
  });
});

